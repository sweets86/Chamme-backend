import styled from "styled-components";
import ConfirmationComposition from '../compositions/ConfirmationComposition.tsx'

const Contain = styled.div`
  display: flex;
  justify-content: center;
`;

export default function ConfirmationView() {
  return (
    <Contain>
      <ConfirmationComposition />
    </Contain>
  );
}
