/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

function TransparentFooter() {
  return (
    <footer className="footer">
      <Container>
        <div className="copyright" id="copyright">
          © {new Date().getFullYear()}, created by{" "}
          <a
            href="./index"
            target="_blank"
            style={{ color: "white"}}
          >
            Find-icament
          </a>
        </div>
      </Container>
    </footer>
  );
}

export default TransparentFooter;
