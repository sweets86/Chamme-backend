import React from "react";
import DeliveryInfoStyled from "./DeliveryInfoStyled";
import { CartContext } from "../../contexts/cartContext";

const validFirstNameRegex = RegExp(
  /^(?<firstchar>(?=[A-Za-z]))((?<alphachars>[A-Za-z])|(?<specialchars>[A-Za-z]['-](?=[A-Za-z]))|(?<spaces> (?=[A-Za-z])))*$/
);

const validLastNameRegex = RegExp(
  /^(?<firstchar>(?=[A-Za-z]))((?<alphachars>[A-Za-z])|(?<specialchars>[A-Za-z]['-](?=[A-Za-z]))|(?<spaces> (?=[A-Za-z])))*$/
);

const validAddressRegex = RegExp(/^[#.0-9a-öA-Ö\s,-]+$/);

const validPostNumberRegex = RegExp(/^\d{3} \d{2}$/);

const validPostRegex = RegExp(/^(.*[a-öA-Ö]\s*){4}/i);

const validEmailRegex = RegExp(
  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i
);
const validMobileRegex = RegExp(/^(\+\d{1,3}[- ]?)?\d{10}$/);

const validateForm = (errors: any) => {
  let valid = true;
  Object.values(errors).map(
    (value: any) => value.length > 0 && (valid = false)
  );
  return valid;
};

interface Delivery {
  title: string;
  price: number;
}
export const deliveryOptions: Delivery[] = [
  {
    title: "PostNord - paket till närmaste postombud",
    price: 49,
  },
  {
    title: "PostNord hemleverans - direkt hem till dörren",
    price: 99,
  },
];

interface Props {
/*   deliveryOption: (option: any) => void; */
  printBuyerInfoBtn: (buyerInfo: any) => void;
}

interface State {
  firstName: string;
  lastName: string;
  address: string;
  postNumber: number;
  postAddress: string;
  email: string;
  mobile: number;
  toggle: number;
  deliveryOption: string;

  errors: {
    firstName: any;
    lastName: any;
    address: any;
    postNumber: any;
    postAddress: any;
    email: any;
    mobile: any;
  };
}

export default class DeliveryInfo extends React.Component<Props, State> {
  static contextType = CartContext;

  constructor(props: Props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      address: "",
      postNumber: parseInt(""),
      postAddress: "",
      email: "",
      mobile: parseInt(""),
      toggle: 0,
      deliveryOption: "49",

      errors: {
        firstName: "",
        lastName: "",
        address: "",
        postNumber: "",
        postAddress: "",
        email: "",
        mobile: "",
      },
    };
  }

  handleSubmit = () => {
    /* let option = this.state.deliveryOption; */
    if (
      validateForm(this.state.errors) &&
      this.state.firstName &&
      this.state.lastName &&
      this.state.address &&
      this.state.postNumber &&
      this.state.postAddress &&
      this.state.email &&
      this.state.mobile
    ) {
      const buyerInfo = {
        deliveryOption: this.state.deliveryOption,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        address: this.state.address,
        postNumber: this.state.postNumber,
        postAddress: this.state.postAddress,
        email: this.state.email,
        mobile: this.state.mobile,
      };
      this.props.printBuyerInfoBtn(buyerInfo);
      /* this.props.deliveryOption(option); */
      console.log(buyerInfo);
    } else {
      console.error("Invalid Form");
    }
  };

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      case "firstName":
        errors.firstName = validFirstNameRegex.test(value)
          ? ""
          : "Fyll i förnamn";
        break;
      case "lastName":
        errors.lastName = validLastNameRegex.test(value)
          ? ""
          : "Fyll i efternamn";
        break;
      case "address":
        errors.address = validAddressRegex.test(value) ? "" : "Fyll i adress";
        break;
      case "postNumber":
        errors.postNumber = validPostNumberRegex.test(value)
          ? ""
          : "Fyll i postnummer";
        break;
      case "postAddress":
        errors.postAddress = validPostRegex.test(value) ? "" : "Fyll i ort";
        break;
      case "email":
        errors.email = validEmailRegex.test(value) ? "" : "Fyll i email";
        break;
      case "mobile":
        errors.mobile = validMobileRegex.test(value)
          ? ""
          : "Fyll i mobilnummer";
        break;
      default:
        break;
    }
    this.setState((prevState) => ({
      ...prevState,
      errors,
      [name]: value,
    }));
  };

  handleOption = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    event.preventDefault();
    const value = event.target.value;
    const checked = event.target.checked;
    this.setState({ toggle: index }, () => {});

    if (checked === true)
      this.setState({ deliveryOption: value }, () => {
        const optionValue = this.context.deliveryOption(this.state.deliveryOption);
        console.log(optionValue);
      });
  };

  render() {
    const { errors } = this.state;
    return (
      <DeliveryInfoStyled>
        <h2>Din leveransadress</h2>
        <div className="container">
          <div className="names">
            <label className="smallLabel" htmlFor="firstName">
              <input
                name="firstName"
                type="firstName"
                onChange={this.handleChange}
                placeholder="Förnamn"
              />
              {errors.firstName.length > 0 && (
                <span style={{ color: "red" }}>{errors.firstName}</span>
              )}
            </label>
            <label className="smallLabel" htmlFor="lastName">
              <input
                name="lastName"
                type="lastName"
                onChange={this.handleChange}
                placeholder="Efternamn"
              />
              {errors.firstName.length > 0 && (
                <span style={{ color: "red" }}>{errors.firstName}</span>
              )}
            </label>
          </div>
          <div className="address">
            <label htmlFor="address">
              <input
                name="address"
                type="address"
                onChange={this.handleChange}
                placeholder="Adress"
              />
              {errors.address.length > 0 && (
                <span style={{ color: "red" }}>{errors.address}</span>
              )}
            </label>
          </div>
          <div className="position">
            <label className="smallLabel" htmlFor="postNumber">
              <input
                name="postNumber"
                type="postNumber"
                onChange={this.handleChange}
                placeholder="Postnummer"
              />
              {errors.postNumber.length > 0 && (
                <span style={{ color: "red" }}>{errors.postNumber}</span>
              )}
            </label>
            <label className="smallLabel" htmlFor="postAddress">
              <input
                name="postAddress"
                type="postAddress"
                onChange={this.handleChange}
                placeholder="Ort"
              />
              {errors.postAddress.length > 0 && (
                <span style={{ color: "red" }}>{errors.postAddress}</span>
              )}
            </label>
          </div>
        </div>
        <h2>Dina Kontaktuppgifter</h2>
        <div className="contactContainer">
          <label htmlFor="email">
            <input
              name="email"
              type="email"
              onChange={this.handleChange}
              placeholder="Mail"
            />
            {errors.email.length > 0 && (
              <span style={{ color: "red" }}>{errors.email}</span>
            )}
          </label>
          <label htmlFor="mobile">
            <input
              name="mobile"
              type="mobile"
              onChange={this.handleChange}
              placeholder="Mobil"
            />
            {errors.mobile.length > 0 && (
              <span style={{ color: "red" }}>{errors.mobile}</span>
            )}
          </label>
        </div>
        <h2>Välj leveransalternativ</h2>
        <div className="deliverContainer">
          <div className="deliver-option">
            {deliveryOptions.map((option, index) => {
              return (
                <label className="largeLabel" htmlFor="delivery" key={index}>
                  <p>
                    {option.title}
                    <br />
                    {option.price} kr
                  </p>
                  <input
                    name="delivery"
                    type="radio"
                    value={option.price}
                    checked={this.state.toggle === index}
                    onChange={(e) => this.handleOption(e, index)}
                  />
                </label>
              );
            })}
          </div>
        </div>
        <div className="save-div">
          <button onClick={this.handleSubmit} className="btn-save">
            Spara
          </button>
        </div>
      </DeliveryInfoStyled>
    );
  }
}
