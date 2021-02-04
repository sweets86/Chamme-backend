import React from "react";
import styled from "styled-components";
import PrivacyComposition from "../compositions/PrivacyComposition";

const Contain = styled.div`
  display: flex;
  justify-content: center;
`;

export default function PrivacyView() {
  return (
    <Contain>
      <PrivacyComposition />
    </Contain>
  );
}
