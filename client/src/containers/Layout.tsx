import React from "react";
import Navbar from "../compositions/Navbar/index";
import ViewContainer from "./ViewContainer";
import { withRouter } from "react-router-dom";

function Layout() {
  return (
    <div>
      <Navbar />
      <ViewContainer />
    </div>
  );
}

export default withRouter(Layout);
