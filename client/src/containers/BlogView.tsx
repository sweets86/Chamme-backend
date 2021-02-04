import styled from "styled-components";
import BlogImage from "../components/BlogImage";
import BlogComposition from "../compositions/BlogComposition";
import InfoComposition from "../compositions/InfoComposition";

const Contain = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: #f5f3f7;
`;

export default function BlogView() {
  return (
    <Contain>
      <BlogComposition />
      <BlogImage />
      <InfoComposition />
      <div id="contact"></div>
      <div id="subscribe"></div>
    </Contain>
  );
}
