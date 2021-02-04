import React, {useEffect, useState} from "react";
import PrivacyCompositionStyled from "./PrivacyCompositionStyled";
import { Link, useLocation } from "react-router-dom";

export default function PrivacyComposition() {

  const location = useLocation();
  const state = location.state as string;
  const [showBacktoPreviousPage, setShowBacktoPreviousPage] = useState(false)

  useEffect(() => {
    if (state === "http://localhost:3000/order") {
      setShowBacktoPreviousPage(true);
    } else setShowBacktoPreviousPage(false);
    return;
  }, [state]);

  return (
    <PrivacyCompositionStyled>
      <h1>Privacy Policy</h1>
      {showBacktoPreviousPage ? (
        <Link to={"./order"}><h4>{"<<"} Back to order..</h4></Link>
      ) : null}
      
      <div className="contain">
        <div className="contentBox">
          What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum. Why do we use it?
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English.
        </div>
        <div className="contentBox">
          What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum. Why do we use it?
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English.
        </div>
      </div>
    </PrivacyCompositionStyled>
  );
}
