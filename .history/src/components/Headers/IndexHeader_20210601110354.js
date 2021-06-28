/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";
// core components

function IndexHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div >
        <div
          className=""
          style={{
            backgroundImage:
              "url(" + require("assets/img/header.png").default + ")",
          }}
          ref={pageHeader}
        ></div>
        <Container>
          <div className="content-center brand">
            <img
              alt="..."
              className="n-logo"
              src={require("assets/img/now-logo.png").default}
            ></img>
            <h1 className="h1-seo">Find-icament</h1>
            <h3>Le partenaire de vos traitements.</h3>
          </div>
        </Container>
      </div>
    </>
  );
}

const syles={
  background:{
    position: "absolute",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    width: "100%",
    height: "100%",
    zIndex: -1,
  }
}
export default IndexHeader;
