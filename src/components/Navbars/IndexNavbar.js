import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
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
  Container,
  UncontrolledTooltip,
} from "reactstrap";

function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 399 ||
        document.body.scrollTop > 399
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className={"fixed-top " + navbarColor} expand="lg" color="info">
        <Container>
          <div className="navbar-translate">
            <NavbarBrand
              href="./index"
              target="_blank"
              id="navbar-brand"
            >
              Portfolio
            </NavbarBrand>
            <button
              className="navbar-toggler navbar-toggler"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              type="button"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >
            <Nav navbar>
              <NavItem>
                <NavLink
                  href="https://play.google.com/store/search?q=find-icament&c=apps&hl=fr&gl=US"
                >
                  <i className="now-ui-icons business_badge"></i>
                  <p>Consulter mon CV</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://www.apple.com/fr/search/find-icament?src=globalnav"
                >
                  <i className="now-ui-icons business_briefcase-24"></i>
                  <p>Mes projets</p>
                </NavLink>
                
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://www.linkedin.com/in/samantha-deschaepmeester/"
                  target="_blank"
                  id="linkedin-tooltip"
                >
                  <i className="fab fa-linkedin"></i>
                </NavLink>
                <UncontrolledTooltip target="#linkedin-tooltip">
                  LinkedIn
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <Button
                  className="nav-link btn-neutral"
                  color="info"
                  href="mailto:deschaepmeester.samantha@gmail.com"
                  id="upgrade-to-pro"
                  target="_blank"
                >
                  <i style={styles.icon} className="now-ui-icons ui-1_email-85"></i> 
                  <p> Contactez-moi !</p>
                </Button>
                <UncontrolledTooltip target="#upgrade-to-pro">
                  deschaepmeester.samantha@gmail.com
                </UncontrolledTooltip>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

const styles = {
  icon: {
    marginRight : 5
  }
}
export default IndexNavbar;
