import styled from "styled-components";

const ContactStyled = styled.div`
  width: auto;
  margin-right: 4em;
  padding-top: 0.6em;

  form {
    display: flex;
    flex-direction: column;
  }

  label {
    margin-bottom: 5px;
  }

  input {
    padding: 4px 8px;
    margin-bottom: 8px;
    border-radius: 3px;
    border: 1px solid #888;
    font-size: 14px;
    width: 240px;
  }

  button {
    margin-top: 0.5em;
  }

  .message-input {
    display: block;
    width: 240px;
    padding: 4px 8px;
    margin-bottom: 8px;
    border-radius: 3px;
    border: 1px solid #888;
    font-size: 14px;
    resize: vertical;
  }

  @media screen and (max-width: 400px) {
      width: 100%;
      margin-left: 0;
  }
`;
export default ContactStyled;
