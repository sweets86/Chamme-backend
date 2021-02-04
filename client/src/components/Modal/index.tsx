import React, { useState } from "react";
import ModalStyled from "./ModalStyled";
import Detail from "../Detail";

interface Props {
  closeModal: (extrasColor: string, extrasSize: string) => void;
  exitModal: () => void;
  size: string[];
  color: string[];
}

export default function Modal(props: Props) {
  const [extrasColor, setExtrasColor] = useState("");
  const [extrasSize, setExtrasSize] = useState("");

  const passingValues = (color: string, size: string) => {
    console.log(color, size);
    setExtrasColor(color);
    setExtrasSize(size);
  };

  return (
    <ModalStyled>
      <div className="modal-inner">
        <span>
          <h3>Välj en färg och en storlek</h3>
          <div className="exitBtnContainer" onClick={props.exitModal}>
            <div className="extBtnDiv">
              <div className="exitBtn"></div>
            </div>
          </div>
        </span>
        <Detail
          color={props.color}
          size={props.size}
          passingValues={(color, size) => passingValues(color, size)}
        />
        <button className="done-button" onClick={() => props.closeModal(extrasColor, extrasSize)}>
          Klar
        </button>
      </div>
    </ModalStyled>
  );
}
