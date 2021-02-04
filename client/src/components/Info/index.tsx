import React from "react";
import InfoStyled from "./InfoStyled";
import Subscribe from '../Subscribe'

export default function Info() {
  return (
    <InfoStyled>
      <div>
          <h2>Links</h2>
        <ul>
            <li><a href="https://www.pixabay.com/sv/">Pixabay</a></li>
            <li><a href="https://www.wwf.se/djur/korallrev/">Korallrev</a></li>
            <li><a href="https://www.10fakta.se/kameleonter/">Kameleonter</a></li>
        </ul>
      </div>
      <Subscribe />
    </InfoStyled>
  );
}
