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
                      style={{ left: 0, height: 200, width: 200 }}
                      alt="..."
                      className="rounded-circle"
                      src={require("assets/img/photo.jpg").default}
                    />
                  </Col>
                </span>
              </BrowserView>

              Passionnée par le développement informatique depuis des années, 
              <br />
              J'aime apprendre de nouvelles technologies et faire mes projets personnels.
            <br />
            Actuellement étudiante en master ingénieur informatique option IA à l'ESIEE, je recherche une 
            entreprise pour un contrat d'apprentissage de deux ans.
            <br />
            Ce site web me permet de vous montrez qui je suis de manière un peu plus approfondie qu'un CV.<br />
            <br />
            <b>N'hésitez pas à me contactez pour plus d'informations si mon profil attire votre attention pour une opportunité professionnelle.</b>
            </p>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Introduction;
