import React from "react";
import styled from "styled-components";
import { HashLink as Link } from "react-router-hash-link";

const DropMenuStyled = styled.div<Props>`
  background-color: black;
  color: white;
  position: fixed;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  top: 0;
  right: 0;
  height: 30vh;
  width: 200px;
  padding-top: 3.5em;
  transition: transform 0.3s ease-in-out;
  border-radius: 10px;

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    padding-top: 5px;
  }

  li {
    padding: 10px 10px 0;;
    display: inline-block;
    color: white;
  }

  @media screen and (max-width: 400px) {
    width: 86px;
    height: 30vh;

    li {
      padding-bottom: 0px;
      height: 0.5em;
      width: 2em;
    }

    ul {
      padding-left: 0;
      padding-top: 0;
    }
  }
`;

interface Props {
  open: boolean;
}

export default function DropMenu(props: Props) {
  return (
    <DropMenuStyled open={props.open}>
      <ul>
        <Link to="/products">
          <li>T-Shirts</li>
        </Link>
        <Link to="/products#fragrances">
          <li>Fragrance Bags</li>
        </Link>
        <Link to="/products#fragrances">
          <li>Yankee Candle</li>
        </Link>
        <Link to="/products#lotion">
          <li>Lotion</li>
        </Link>
      </ul>
    </DropMenuStyled>
  );
}
