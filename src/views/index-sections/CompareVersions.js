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
  const [iconPills, setIconPills] = React.useState("1");
  const [pills, setPills] = React.useState("1");

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
                        La version gratuite de Find-icament vous propose un accès aux <b>fonctions limitées</b> de l'application.
                      </p>
                      <p>
                        Pour en savoir plus, cliquer sur la section <b>Fonctionnalités</b>.
                      </p>
                      <img
                        alt="..."
                        style={styles.logo}
                        src={require("assets/img/logo-free.png").default}
                      />

                    </TabPane>
                    <TabPane tabId="iconPills2">
                      <p>
                        <b>Voici les Fonctionnalités auxquelles vous avez accès :</b>
                      </p>
                      <ul style={{ textAlign: 'left', marginTop: 15 }}>
                        <li style={{ marginTop: 15 }}>
                          Scanner de médicaments (10/jour maximum)
                        </li>
                        <li style={{ marginTop: 15 }}>
                          Test de compatibilité de médicaments (5/jour maximum)
                        </li>
                        <li style={{ marginTop: 15 }}>
                          Liste de médicaments
                        </li>
                        <li style={{ marginTop: 15 }}>
                          Planning de médicaments (5 traitements actifs en même temps)
                        </li>
                      </ul>
                    </TabPane>
                    <TabPane tabId="iconPills3">
                      <p>
                        Ci-dessous les liens de Téléchargements de l'application :
                      </p>
                      <p style={{ marginTop: 10 }}>
                        -  <a style={{ color: "darkblue" }} target="_blank" href="https://play.google.com/store/search?q=findicament&c=apps&hl=fr&gl=US">Lien de l'application sur le Playstore</a>
                        <br />
                        -  <a style={{ color: "darkblue" }} target="_blank" href="https://www.apple.com/fr/search/findicament?src=globalnav">Lien de l'application sur Apple store</a>
                      </p> </TabPane>
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
                        La version premium de Find-icament vous propose un accès à <b>toutes les fonctionnalités</b> de l'application, sans publicité.
                      </p>
                      <p>
                        Pour en savoir plus, cliquer sur la section <b>Fonctionnalités</b>.
                      </p>
                      <img
                        alt="..."
                        style={styles.logo}
                        src={require("assets/img/logo-premium.png").default}
                      />
                    </TabPane>
                    <TabPane tabId="pills2">
                      <p>
                        <b>Voici les Fonctionnalités auxquelles vous avez accès :</b>
                      </p>
                      <ul style={{ textAlign: 'left' }}>
                        <li style={ styles.list }>
                          <i style={ styles.pillsIcon} class="fas fa-pills" />
                          <span style={{ marginLeft: 10 }}>Scanner de médicaments </span>
                        </li>
                        <li style={ styles.list }>
                          <i style={ styles.pillsIcon} class="fas fa-pills" />
                          <span style={{ marginLeft: 10 }}>Test de compatibilité de médicaments </span>
                        </li>
                        <li style={ styles.list }>
                          <i style={ styles.pillsIcon} class="fas fa-pills" />
                          <span style={{ marginLeft: 10 }}>Liste de médicaments</span>
                        </li>
                        <li style={ styles.list }>
                          <i style={ styles.pillsIcon} class="fas fa-pills" />
                          <span style={{ marginLeft: 10 }}>Planning de médicaments</span>
                        </li>
                        <img
                          alt="..."
                          style={styles.premiumIcon}
                          src={require("assets/img/premium-only.png").default}
                        />
                        <li style={ styles.list }>
                            <i style={ styles.pillsIcon} class="fas fa-pills" />
                            <span style={{ marginLeft: 10 }}>Historique de recherches</span>
                          <i style={styles.icon} class="fas fa-crown" />
                        </li>
                        <li style={ styles.list }>
                          <i style={ styles.pillsIcon} class="fas fa-pills" />
                          <span style={{ marginLeft: 10 }}>Mettre en favoris des médicaments</span>
                          <i style={styles.icon} class="fas fa-crown" />
                        </li>
                      </ul>
                      <span style={styles.smallDescription}><i style={styles.icon} class="fas fa-crown" /> Exclusif à la version Premium</span>
                    </TabPane>
                    <TabPane tabId="pills3">
                      <p>
                        Ci-dessous les liens de Téléchargements de l'application :
                      </p>
                      <p style={{ marginTop: 10 }}>
                        -  <a style={{ color: "darkblue" }} target="_blank" href="https://play.google.com/store/search?q=findicament&c=apps&hl=fr&gl=US">Lien de l'application sur le Playstore</a>
                        <br />
                        -  <a style={{ color: "darkblue" }} target="_blank" href="https://www.apple.com/fr/search/findicament?src=globalnav">Lien de l'application sur Apple store</a>
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

const styles = {
  logo: {
    width: "50%"
  },
  premiumIcon: {
    width: "15%"
  },
  icon: {
    marginLeft: 5,
    color: " #ffcc00"
  },
  list: {
    marginTop: 15,
    listStyleType: "none"
  },
  pillsIcon: {
    color: "#666666"
  },
  smallDescription: {
    fontSize: 10,
    marginTop: 20,
    float: "left",
    fontStyle: 'italic'
  }
}

export default CompareVersions;
