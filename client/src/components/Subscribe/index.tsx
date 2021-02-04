import React from "react";
import SubscribeStyled from "./SubscribeStyled";

export default function Subscribe() {
  const handleSubmit = () => {
    alert("type in your email");
  };

  const handleChange = () => {
    alert("type in your email");
  };

  return (
    <SubscribeStyled>
      <h2 className="subscribe">Subscribe</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">
          <input
            name="email"
            type="email"
            onChange={handleChange}
            placeholder="your@email.com"
            autoComplete="on"
          />
        </label>
        <button type="submit" value="submit">
          Submit
        </button>
      </form>
    </SubscribeStyled>
  );
}
