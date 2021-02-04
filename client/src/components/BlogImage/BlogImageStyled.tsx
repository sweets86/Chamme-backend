import styled from "styled-components";

const BlogImageStyled = styled.div`
  width: 100%;
  height: auto;
  margin-bottom: 1em;
  padding: 1em;

  .contain {
    padding: 1em;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 1rem;
  }

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  @media screen and (max-width: 400px) {
    background-color: #201e1e;
    box-shadow: 0 8px 6px -6px black;
    padding: 0;
    margin-bottom: 3em;
  }
`;
export default BlogImageStyled;
