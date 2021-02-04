import styled from "styled-components";

const PrivacyPolicyCheckboxStyled = styled.div`
  display: flex;
  margin-top: 1em;
  width: 75%;

  .privacy {
    margin: 0;
    display: inline-block;
    color: black;
    margin-right: 3px;
  }

  input {
      margin-right: 10px;
    }

  @media screen and (max-width: 840px) {
      width: 100%;
  }

  @media screen and (max-width: 400px) {
      width: 100%;
  }
`;
export default PrivacyPolicyCheckboxStyled;
