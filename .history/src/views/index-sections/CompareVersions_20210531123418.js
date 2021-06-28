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
              <p className="category"><i className="now-ui-icons objects_key-25" /> Version gratuite </p> 
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
                    activeTab={"iconPills" + iconPills}
                  >
                    <TabPane tabId="iconPills1">
                      <p>
                      iconPills1
                      </p>
                    </TabPane>
                    <TabPane tabId="iconPills2">
                      <p>
                        Fonctionnalités
                      </p>
                    </TabPane>
                    <TabPane tabId="iconPills3">
                      <p>
                        Téléchargements
                      </p>
                    </TabPane>
                  </TabContent>
                </CardBody>
              </Card>



            </Col>
            <Col className="ml-auto mr-auto" md="10" xl="6">
              <p className="category"><i className="now-ui-icons objects_diamond" /> Version premium</p>
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
                        className={pills2 === "4" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setPills2("4");
                        }}
                      >
                        Description
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={pills2 === "5" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setPills2("5");
                        }}
                      >
                        Fonctionnalités
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={pills2 === "6" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setPills2("6");
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
                    activeTab={"iconPills2" + iconPills2}
                  >
                    <TabPane tabId="iconPills4">
                      <p>
                        Description 2
                      </p>
                    </TabPane>
                    <TabPane tabId="iconPills5">
                      <p>
                        Fonctionnalités 2
                      </p>
                    </TabPane>
                    <TabPane tabId="iconPills6">
                      <p>
                        Téléchargements 2
                      </p>
                    </TabPane>
                  </TabContent>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="section section-tabs">
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" md="10" xl="6">
              <p className="category">Tabs with Icons on Card</p>
              <Card>
                <CardHeader>
                  <Nav className="justify-content-center" role="tablist" tabs>
                    <NavItem>
                      <NavLink
                        className={iconPills === "1" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setIconPills("1");
                        }}
                      >
                        <i className="now-ui-icons objects_umbrella-13"></i>
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
                        <i className="now-ui-icons shopping_cart-simple"></i>
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
                        <i className="now-ui-icons shopping_shop"></i>
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
                        descri
                      </p>
                    </TabPane>
                    <TabPane tabId="iconPills2">
                      <p>
                        fonctions
                      </p>
                    </TabPane>
                    <TabPane tabId="iconPills3">
                      <p>
                        télé
                      </p>
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
