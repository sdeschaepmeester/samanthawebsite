/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

function TransparentFooter() {
  return (
    <footer className="footer">
      <Container>
        <div className="copyright" id="copyright">
          Published in {new Date().getFullYear()}
        </div>
      </Container>
    </footer>
  );
}

export default TransparentFooter;
