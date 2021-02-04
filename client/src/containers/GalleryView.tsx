import styled from "styled-components";
import GalleryComposition from "../compositions/GalleryComposition";

const Contain = styled.div`
  display: flex;
  justify-content: center;
  background-color: #f5f3f7;
`;

export default function GalleryView() {
  return (
    <Contain>
      <GalleryComposition />
    </Contain>
  );
}
