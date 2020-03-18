import React from "react";
import NavigationBar from "./navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { SocialIcon } from "react-social-icons";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Sumit from "./images/sumit.jpeg";
import Aniket from "./images/aniket.jpeg";
import Nishant from "./images/nishant.jpeg";
import Anchal from "./images/anchal.jpg";

function AboutPage(props) {
  return (
    <div>
      <NavigationBar />
      <h1 style={{ padding: "10px", margin: "10px", textAlign: "center" }}>
        <b>The Team.</b>
      </h1>

      <Container>
        <Row>
          <Col>
            <Card style={{ width: "15rem" }}>
              <Card.Img variant="top" src={Sumit} />
              <Card.Body>
                <Card.Title
                  className="text-muted"
                  style={{ textAlign: "center" }}
                >
                  Sumit Kumar
                </Card.Title>
                <Card.Text style={{ textAlign: "center" }}>
                  <SocialIcon
                    style={{ margin: "3px" }}
                    url="https://www.linkedin.com/in/aniket-k-224901112"
                  />
                  <SocialIcon
                    style={{ margin: "3px" }}
                    url="https://www.facebook.com/profile.php?id=100017847277255"
                  />
                  <SocialIcon
                    style={{ margin: "3px" }}
                    url="https://github.com/aniket-28sep"
                  />
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card style={{ width: "15rem" }}>
              <Card.Img variant="top" src={Aniket} />
              <Card.Body>
                <Card.Title
                  className="text-muted"
                  style={{ textAlign: "center" }}
                >
                  Aniket Kumar
                </Card.Title>
                <Card.Text style={{ textAlign: "center" }}>
                  <SocialIcon
                    style={{ margin: "3px" }}
                    url="https://www.linkedin.com/in/aniket-k-224901112"
                  />
                  <SocialIcon
                    style={{ margin: "3px" }}
                    url="https://www.facebook.com/profile.php?id=100017847277255"
                  />
                  <SocialIcon
                    style={{ margin: "3px" }}
                    url="https://github.com/aniket-28sep"
                  />
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card style={{ width: "15rem" }}>
              <Card.Img variant="top" src={Anchal} />
              <Card.Body>
                <Card.Title
                  className="text-muted"
                  style={{ textAlign: "center" }}
                >
                  Anchal Ajay
                </Card.Title>
                <Card.Text style={{ textAlign: "center" }}>
                  <SocialIcon
                    style={{ margin: "3px" }}
                    url="https://www.linkedin.com/in/anchal-ajay-453a78165"
                  />
                  <SocialIcon
                    style={{ margin: "3px" }}
                    url="https://www.facebook.com/Anchalajay2"
                  />
                  <SocialIcon
                    style={{ margin: "3px" }}
                    url="https://github.com/anchal12ajay12"
                  />
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card style={{ width: "15rem" }}>
              <Card.Img variant="top" src={Nishant} />
              <Card.Body>
                <Card.Title
                  className="text-muted"
                  style={{ textAlign: "center" }}
                >
                  Nishant Raj
                </Card.Title>
                <Card.Text style={{ textAlign: "center" }}>
                  <SocialIcon
                    style={{ margin: "3px" }}
                    url="https://www.linkedin.com/in/nishant-raj-1776b0165/"
                  />
                  <SocialIcon
                    style={{ margin: "3px" }}
                    url="https://www.facebook.com/nishant.singhraj.1"
                  />
                  <SocialIcon
                    style={{ margin: "3px" }}
                    url="https://github.com/nish-976"
                  />
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AboutPage;
