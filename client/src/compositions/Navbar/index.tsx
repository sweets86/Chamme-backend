import React, { useEffect, useState } from "react";
import HeaderBase from "../../components/HeaderBase/index";
import { RouteComponentProps, withRouter} from "react-router-dom";
import HeaderMain from "../../components/HeaderMain";
import HeaderDark from "../../components/HeaderDark";
import HeaderLight from "../../components/HeaderLight";

interface Params {
  id: string;
}

interface Props extends RouteComponentProps<Params> {}

function Navbar(props: Props) {
  const headerBase = props.location.pathname;
  const id = window.location.href.split('/')[4]  


  const [renderViewDetail, setRenderViewDetail] = useState(false);
  const [renderViewProducts, setRenderViewProducts] = useState(false);
  const [renderViewMain, setRenderViewMain] = useState(false);
  const [renderViewOther, setRenderViewOther] = useState(false);

  useEffect(() => {
    if (headerBase === "/") {
      setRenderViewMain(true);
      setRenderViewDetail(false)
      setRenderViewProducts(false)
      setRenderViewOther(false)
    } else if (headerBase === "/products") {
      setRenderViewProducts(true);
      setRenderViewOther(false)
      setRenderViewDetail(false)
      setRenderViewMain(false);
    } else if (headerBase === `/product/${id}`) {
      setRenderViewDetail(true);
      setRenderViewMain(false);
      setRenderViewProducts(false);
      setRenderViewOther(false)
    } else {
      setRenderViewOther(true);
      setRenderViewDetail(false);
      setRenderViewMain(false);
      setRenderViewProducts(false);
    }
  }, [headerBase, id]);

  return (
    <div>
      {renderViewOther ? (
        <HeaderBase />
      ) : renderViewMain ? (
        <HeaderMain />
      ) : renderViewProducts ? (
        <HeaderDark />
      ) : renderViewDetail ? (
        <HeaderLight />
      ) : null}
    </div>
  );
}

export default withRouter(Navbar);
