import React from "react";
// reactstrap components
import { Container, Col } from "reactstrap";
import { BrowserView, MobileView } from 'react-device-detect';

// core components

function Introduction() {

  return (
    <>
      <div className="section section-basic" id="basic-elements">
        <Container>
          <div className="typography-line" style={{ marginTop: 30 }}>
            <p>
              <BrowserView>
                <span>
                  <Col sm="10">
                    <img
                      style={{ left: 0 }}
                      alt="..."
                      className="rounded-circle"
                      src={require("assets/img/old-phone.jpg").default}
                    />
                  </Col>
                </span>
              </BrowserView>

              Publiée en 2021, Find-icament est une application médicale
              vous permettant de <b>gérer vos traitements</b> tout en vous donnant divers renseignements sur ces médicaments.
              <br />
              Basée sur une base de données officielle du gouvernement, nous proposons une large liste de médicaments.
              <br /><br />
              <b>Parcourez cette liste, scannez une boite de médicament</b> pour retrouvez toutes les informations dessus.
              Un <b>planning</b> vous propose également de créer des rappels pour vos traitements.
              <br /><br />
              L'application est disponible sur Android et IOS.
            </p>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Introduction;
