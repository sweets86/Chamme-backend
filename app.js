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

let orders = [];
let updateInfoToSave = [];
let savingData = [];

app.post("/sending-data", urlencodedParser, function (req, res) {
  res.json("data");

  const updateDataToSave = {
    info: req.body.info,
    cart: req.body.cart,
    extras: req.body.extras,
  };

  updateInfoToSave.push(updateDataToSave);

  let orderCart;
  let orderExtras;

  for (let i = 0; i < updateInfoToSave.length; i++) {
    let order = updateInfoToSave[i];
    let firstName = order.info[0].firstName;
    let lastName = order.info[0].lastName;
    let address = order.info[0].address;
    let postNumber = order.info[0].postNumber;
    let postAddress = order.info[0].postAddress;
    let email = order.info[0].email;
    let mobile = order.info[0].mobile;
    orderCart = order.cart;
    orderExtras = order.extras;

    const commonDataToSave = {
      firstName: firstName,
      lastName: lastName,
      address: address,
      postNumber: postNumber,
      postAddress: postAddress,
      email: email,
      mobile: mobile,
      totalSumProducts: req.body.totalPriceProducts,
      VAT: req.body.VAT,
      deliveryPrice: req.body.deliveryPrice,
      totalAmount: req.body.totalAmount,
      totalQuantity: req.body.totalQuantity,
    };
    savingData.push(commonDataToSave);
  }

  for (let i = 0; i < orderCart.length; i++) {
    let id = orderCart[i].id;
    let title = orderCart[i].title;
    let name = orderCart[i].name;
    let price = orderCart[i].price;
    let quantity = orderCart[i].quantity;

    const productDataToSave = {
      productId: id,
      productBrand: title,
      productName: name,
      productPrice: price,
      productQuantity: quantity,
    };
    savingData.push(productDataToSave);
  }

  for (let i = 0; i < orderExtras.length; i++) {
    let extrasColor = orderExtras[i].extrasColor;
    let extrasSize = orderExtras[i].extrasSize;
    let productId = orderExtras[i].productId;

    const extrasToSave = {
      extrasColor: extrasColor,
      extrasSize: extrasSize,
      productId: productId,
    };
    savingData.push(extrasToSave);
  }

  console.log(savingData);
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

    for (let i = 0; i < item.length; i++) {
      totalAmount = item[0].price_data.unit_amount;
    }
  }

  const savingInfo = {
    sessionId: jsonorder,
    amount: totalAmount,
  };

  savingData.push(savingInfo);

  try {
    const session = await stripe.checkout.sessions.retrieve(req.body.sessionId);

    if (session) {
      res.json({ isVerified: session.payment_status == "paid" });
      if (session.id == jsonorder) {
        fs.appendFile(
          "file.json",
          JSON.stringify(savingData, null, 2),
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
  let sessionId;
  for (let i = 0; i < savingData.length; i++) {
    let order = savingData[i];
    sessionId = order.sessionId;
  }

  if (sessionId == req.params.id) {
    res.json(savingData);
  }
});

app.listen(port, () => console.log(`listening on port ${port}`));
