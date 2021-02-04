import styled from "styled-components";
import DetailComposition from '../compositions/DetailComposition'

const Contain = styled.div`
  display: flex;
  justify-content: center;
  background-color: #f5f3f7;
`;

export default function DetailView() {
  return (
    <Contain>
      <DetailComposition />
    </Contain>
  );
}
