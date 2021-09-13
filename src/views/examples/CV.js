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

function CV() {
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
            <div className="page-header clear-filter" filter-color="white" >
                <div
                    className="page-header-image"
                    style={{
                        backgroundImage:
                            "url(" + require("assets/img/login-image.png").default + ")",
                    }}
                ></div>
                <div >
                    <Container style={{marginTop: 100}}>
                        {/* <button type="button" class="btn btn-info" style={{top: 0, left: -10, position: 'absolute'}}>Télécharger mon CV</button> */}
                    
                        <img src="https://zupimages.net/up/21/37/36we.jpg" style={{ width: 650, height: 900}} alt="..." />
                           
                    </Container>
                </div>
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
export default CV;
