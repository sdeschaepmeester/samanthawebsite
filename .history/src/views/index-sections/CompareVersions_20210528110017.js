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
  return (
    <>
      <div className="section section-tabs">
        <Container>
          <Row>
              <Card>
                <CardHeader>
                  hjojko
                </CardHeader>
                <CardBody>
                  <TabContent
                    className="text-center"
                  >
                    <TabPane >
                      <p>
                        I think that’s a responsibility that I have, to push
                        possibilities, to show people, this is the level that
                        things could be at. So when you get something that has
                        the name Kanye West on it, it’s supposed to be pushing
                        the furthest possibilities. I will be the leader of a
                        company that ends up being worth billions of dollars,
                        because I got the answers. I understand culture. I am
                        the nucleus.
                      </p>
                    </TabPane>
                  </TabContent>
                </CardBody>
              </Card>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default CompareVersions;
