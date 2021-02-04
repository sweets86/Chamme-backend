import styled from "styled-components";

const SubscribeStyled = styled.div`
  padding-left: 2.9em;
  margin-left: 2em;
  display: flex;
  flex-direction: column;
  width: 50%;

  .subscribe {
    padding-left: 0;
  }

  form {
    padding-top: 0.3em;
  }

  input {
    margin-right: 1em;
    padding: 4px 8px;
    margin-bottom: 8px;
    border-radius: 3px;
    border: 1px solid #888;
    font-size: 14px;
  }

  button {
      margin-top:0.5em;
  }

  @media screen and (max-width: 400px) {
    padding-left: 0;
    margin-top: 0;
    padding-bottom: 0;
    margin-left: 2em;

    h2 {
      padding-left: 0;
    }

    button {
      margin-top: 0.5em;
    }

    input {
      padding-top: 2px;
      margin-right: 0;
      width: 12em;
    }
  }
`;
export default SubscribeStyled;
