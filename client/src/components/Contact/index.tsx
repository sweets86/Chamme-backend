import React from "react";
import ContactStyled from "./ContactStyled";

interface State {
  name: string;
  message: string;
  email: string;
  sent: boolean;
  buttonText: string;
}

interface Props {}

export default class Info extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      name: "",
      message: "",
      email: "",
      sent: false,
      buttonText: "Send Message",
    };

    this.setState({
      buttonText: "...sending",
    });
  }

  formSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  render() {
    return (
      <ContactStyled>
        <div>
          <h2>Contact</h2>
          <form onSubmit={(e) => this.formSubmit}>
            <label className="message" htmlFor="message-input">
              Message
            </label>
            <textarea
              onChange={(e) => this.setState({ message: e.target.value })}
              name="message"
              className="message-input"
              id="subject"
              placeholder="Please write your message here"
              value={this.state.message}
              required
            />

            <label className="message-name" htmlFor="message-name">
              Name
            </label>
            <input
              onChange={(e) => this.setState({ name: e.target.value })}
              name="name"
              className="message-name"
              type="text"
              placeholder="your name"
              value={this.state.name}
            />

            <label className="message-email" htmlFor="message-email">
              Email
            </label>
            <input
              onChange={(e) => this.setState({ email: e.target.value })}
              name="email"
              className="message-email"
              type="email"
              placeholder="your@email.com"
              required
              value={this.state.email}
            />

            <div className="button--container">
              <button type="submit" className="button button-primary">
                {this.state.buttonText}
              </button>
            </div>
          </form>
        </div>
      </ContactStyled>
    );
  }
}
