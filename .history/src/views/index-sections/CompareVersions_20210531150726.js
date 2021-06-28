import React from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components

function CompareVersions() {
  const [leftFocus, setLeftFocus] = React.useState(false);
  const [rightFocus, setRightFocus] = React.useState(false);
  const [iconPills, setIconPills] = React.useState("1");
  const [pills, setPills] = React.useState("1");

  const [iconPills2, setIconPills2] = React.useState("4");
  const [pills2, setPills2] = React.useState("4");
  return (
    <>
      <div className="section section-tabs">
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" md="10" xl="6">
              <p className="category">Version gratuite</p>
              <Card>
                <CardHeader>
                <Nav
                    className="nav-tabs-neutral justify-content-center"
                    data-background-color="blue"
                    role="tablist"
                    tabs
                  >
                    <NavItem>
                      <NavLink
                        className={iconPills === "1" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setIconPills("1");
                        }}
                      >
                        Description
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={iconPills === "2" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setIconPills("2");
                        }}
                      >
                        Fonctionnalités
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={iconPills === "3" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setIconPills("3");
                        }}
                      >
                        Téléchargements
                      </NavLink>
                    </NavItem>
                  </Nav>
                </CardHeader>
                <CardBody>
                  <TabContent
                    className="text-center"
                    activeTab={"iconPills" + iconPills}
                  >
                    <TabPane tabId="iconPills1">
                      <p>
                      La version gratuite de Find-icament vous propose un accès aux fonctions limitées de l'application.
                        Pour en savoir plus, cliquer sur la section Fonctionnalités.
                      </p>
                    </TabPane>
                    <TabPane tabId="iconPills2">
                      <p>
                      Voici les Fonctionnalités auxquelles vous avez accès :
                        - Scanner de médicaments (10/jour maximum)
                        - Test de compatibilité de médicaments (5/jour maximum)
                        - Liste de médicaments
                        - Planning de médicaments (5 traitements actifs en même temps)
                      </p>
                    </TabPane>
                    <TabPane tabId="iconPills3">
                      <p>
                        Vous pouvez télécharger l'application sur le Playstore (Android) ou sur l'Apple Store (IOS).
                        - https://play.google.com/store/search?q=findicament&c=apps&hl=fr&gl=US (Android)
                        - https://www.apple.com/fr/search/findicament?src=globalnav (IOS)
                      </p>
                      <a target="_blank" href="https://meetflo.zendesk.com/hc/en-us/articles/230425728-Privacy-Policies">Policies</a>
}}/>
                    </TabPane>
                  </TabContent>
                </CardBody>
              </Card>
            </Col>











            
            <Col className="ml-auto mr-auto" md="10" xl="6">
              <p className="category">Version premium</p>
              <Card>
                <CardHeader>
                  <Nav
                    className="nav-tabs-neutral justify-content-center"
                    data-background-color="blue"
                    role="tablist"
                    tabs
                  >
                    <NavItem>
                      <NavLink
                        className={pills === "1" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setPills("1");
                        }}
                      >
                        Description
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={pills === "2" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setPills("2");
                        }}
                      >
                        Fonctionnalités
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={pills === "3" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setPills("3");
                        }}
                      >
                        Téléchargements
                      </NavLink>
                    </NavItem>
                  </Nav>
                </CardHeader>
                <CardBody>
                  <TabContent
                    className="text-center"
                    activeTab={"pills" + pills}
                  >
                    <TabPane tabId="pills1">
                      <p>
                        description
                      </p>
                    </TabPane>
                    <TabPane tabId="pills2">
                      <p>
                        Fonctionnalités
                      </p>
                    </TabPane>
                    <TabPane tabId="pills3">
                      <p>
                        Téléchargements
                      </p>
                    </TabPane>
                  </TabContent>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default CompareVersions;
