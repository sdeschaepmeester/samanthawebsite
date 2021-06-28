import React from "react";
// react plugin used to create switch buttons
import Switch from "react-bootstrap-switch";
// plugin that creates slider
import Slider from "nouislider";

// reactstrap components
import {
  Button,
  Label,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components

function Introduction() {
  const [leftFocus, setLeftFocus] = React.useState(false);
  const [rightFocus, setRightFocus] = React.useState(false);
  React.useEffect(() => {
    if (
      !document
        .getElementById("sliderRegular")
        .classList.contains("noUi-target")
    ) {
      Slider.create(document.getElementById("sliderRegular"), {
        start: [50],
        connect: [true, false],
        step: 0.5,
        range: { min: 0, max: 100 },
      });
    }
    if (
      !document.getElementById("sliderDouble").classList.contains("noUi-target")
    ) {
      Slider.create(document.getElementById("sliderDouble"), {
        start: [20, 80],
        connect: [false, true, false],
        step: 1,
        range: { min: 0, max: 100 },
      });
    }
  });
  return (
    <>
      <div className="section section-basic" id="basic-elements">
        <Container>
          <div className="typography-line" style={{ marginTop: 30 }}>
            <p>
              <span>
                <Col sm="10">
                  <img
                    alt="..."
                    className="rounded-circle"
                    src={require("assets/img/old-phone.jpg").default}
                  />
                </Col>
              </span>
                    Publiée en 2021, Find-icament est une application médicale
                    vous permettant de <b>gérer vos traitements</b> tout en vous donnant divers renseignements sur ces médicaments.
                    Basée sur une <b>base de données officielle du gouvernement</b>, nous proposons une large liste de médicaments.
                    <b>Parcourez cette liste, scanner une boite de médicament</b> pour retrouvez toutes les informations dessus.
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
