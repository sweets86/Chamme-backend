import React, { useState } from "react";
import styled from "styled-components";
import DropMenu from "./../DropMenu";

const BurgerStyled = styled.div<Props>`
  width: 2rem;
  height: 2rem;
  position: fixed;
  right: 100px;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  z-index: 20;
  cursor: pointer;
  position: ${({ open }) => (open ? "fixed" : "sticky")};

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => (open ? "#ffff" : "#ffff")};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }

  @media screen and (max-width: 400px) {
    right: 40px;
  }
`;

interface Props {
  open: boolean;
}

export default function Burger(props: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <BurgerStyled open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </BurgerStyled>
      <DropMenu open={open} />
    </>
  );
}
