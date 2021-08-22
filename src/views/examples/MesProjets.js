import React from "react";

// reactstrap components
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Container,
    Col,
} from "reactstrap";

import {
    Collapse,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    NavbarBrand,
    Navbar,
    NavItem,
    NavLink,
    Nav,
} from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar";
import NavbarLogin from "components/Navbars/NavbarLogin.js";
import TransparentFooter from "components/Footers/TransparentFooter.js";

function MesProjets() {
    const [collapseOpen, setCollapseOpen] = React.useState(false);
    const [firstFocus, setFirstFocus] = React.useState(false);
    const [lastFocus, setLastFocus] = React.useState(false);
    React.useEffect(() => {
        document.body.classList.add("mes-projets");
        document.body.classList.add("sidebar-collapse");
        document.documentElement.classList.remove("nav-open");
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
        return function cleanup() {
            document.body.classList.remove("mes-projets");
            document.body.classList.remove("sidebar-collapse");
        };
    }, []);
    return (
        <>
            <IndexNavbar />
            <div className="page-header clear-filter" filter-color="blue" >
                <div
                    className="page-header-image"
                    style={{
                        backgroundImage:
                            "url(" + require("assets/img/login-image.png").default + ")",
                    }}
                ></div>
                <div className="content">
                    <Container>
                        <Col className="ml-auto mr-auto" md="12">
                            <Card className="card-login card-plain">
                                <CardHeader className="text-center">
                                    Ci-dessous la liste de mes projets personnels en cours :
                                </CardHeader>
                                <CardBody>
                                    <table class="table">
                                        <thead>
                                            <tr>
                                                <th class="text-center">Screenshot</th>
                                                <th>Nom du projet</th>
                                                <th>Description</th>
                                                <th>Technologies</th>
                                                <th class="text-right">Dates</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td class="text-center">
                                                    <img src="https://zupimages.net/up/21/33/femj.jpg" style={{ width: 100 }} alt="..." />
                                                </td>
                                                <td>My desobedient fox</td>
                                                <td>Un jeu mobile où vous vous occupez de votre renard.</td>
                                                <td>Javascript, react-native, Expo <br />Aucun moteur de jeu.</td>
                                                <td class="text-right">Commencé le 22/07/21.<br />Première version estimée début Septembre.</td>
                                            </tr>
                                            <tr>
                                                <td class="text-center">Concept</td>
                                                <td>StoriesForAll</td>
                                                <td>Un site web permettant de partager des histoires.</td>
                                                <td>Javascript, VueJS</td>
                                                <td class="text-right">-</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </CardBody>
                                <CardFooter className="text-center">
                                </CardFooter>
                            </Card>
                        </Col>
                    </Container>
                </div>
                <Navbar style={{ backgroundColor: "grey", opacity: 0.65 }} >
                    <Container>
                        <div className="navbar-translate">
                            <NavbarBrand
                            >
                                <i class="fas fa-info-circle" style={{ marginRight: 15 }} />
                                Information : Cette liste est non-exhaustive
                            </NavbarBrand>
                            <button
                                onClick={() => {
                                    document.documentElement.classList.toggle("nav-open");
                                    setCollapseOpen(!collapseOpen);
                                }}
                                aria-expanded={collapseOpen}
                                className="navbar-toggler"
                                type="button"
                            >
                                <span className="navbar-toggler-bar bar1"></span>
                                <span className="navbar-toggler-bar bar2"></span>
                                <span className="navbar-toggler-bar bar3"></span>
                            </button>
                        </div>
                        <Collapse isOpen={collapseOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem className="active">
                                    <NavLink
                                        href="#pablo"
                                        onClick={(e) => e.preventDefault()}
                                    >
                                        <p>Discover</p>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        href="#pablo"
                                        onClick={(e) => e.preventDefault()}
                                    >
                                        <p>Profile</p>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        href="#pablo"
                                        onClick={(e) => e.preventDefault()}
                                    >
                                        <p>Settings</p>
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
                <TransparentFooter />
            </div>
        </>
    );
}

const styles = {
    background: {
        position: "absolute",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        width: "100%",
        height: "100%",
        zIndex: -1,
    }
}
export default MesProjets;
