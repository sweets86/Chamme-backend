const express = require("express");
require("dotenv").config(".env");
const app = express();
const port = 5000;
const fs = require("fs");
const cors = require("cors");
const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({ extended: false });

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
console.log(process.env.STRIPE_SECRET_KEY);

app.use("/", express.json());

app.use(cors());
app.use(express.static("client"));
/* app.get('/', (req, res) => {
    res.send('Hello There')
}) */

let orders = [];
let saveInfo = [];

app.post("/sending-data", urlencodedParser, function (req, res) {
  console.log(req.body);
  res.json("data");
});

app.post("/checkout-session", async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: req.body.line_items,
      mode: req.body.mode,
      success_url:
        "http://localhost:3000/confirmation/?session_id={CHECKOUT_SESSION_ID}",
      cancel_url: "http://localhost:5000",
    });

    if (session.id) {
      const order = {
        items: req.body.line_items,
        sessionId: session.id,
      };
      orders.push(order);
    } else {
      console.log("No Session");
    }

    res.json({ id: session.id });
  } catch (error) {
    res.status(500).json({ error });
  }
});

app.post("/verify-checkout-session", async (req, res) => {
  let totalAmount;
  let jsonorder;
  for (let i = 0; i < orders.length; i++) {
    let order = orders[i];
    jsonorder = order.sessionId;
    let item = order.items;
    console.log(item);
    for (let i = 0; i < item.length; i++) {
      totalAmount = item[0].price_data.unit_amount;
      console.log(totalAmount);
    }
  }

  const savingInfo = {
    sessionId: jsonorder,
    amount: totalAmount,
  };

  try {
    const session = await stripe.checkout.sessions.retrieve(req.body.sessionId);

    if (session) {
      res.json({ isVerified: session.payment_status == "paid" });
      if (session.id == jsonorder) {
        fs.appendFile(
          "file.json",
          JSON.stringify(savingInfo, null, 2),
          (error) => {
            if (error) {
              throw error;
            }
          }
        );
      }
    } else {
      throw new Error("No Session");
    }
  } catch (error) {
    console.log(error);
    res.json({ isVerified: false });
  }
});

app.get("/order/:id", (req, res) => {
  const order = orders.find((order) => order.sessionId == req.params.id);
  res.json(order);
  orders.splice(order, 1);
});

app.listen(port, () => console.log(`listening on port ${port}`));
