/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

function DarkFooter() {
  return (
    <footer className="footer" data-background-color="black">
      <Container>
        <nav>
          <ul>
            <li>
              <a
                href="./index"
                target="_blank"
              >
                Home
              </a>
            </li>
          </ul>
        </nav>
        <div className="copyright" id="copyright">
          © {new Date().getFullYear()}, Designed by{" "}
            Find-icament
          . Coded by{" "}
          <a
            href="https://codingfactory.fr/"
            target="_blank"
          >
            Coding Factory
          </a>
          .
        </div>
      </Container>
    </footer>
  );
}

export default DarkFooter;
