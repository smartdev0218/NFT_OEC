import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import twitter from "../../images/twitter.png";
import telegram from "../../images/telegram.png";
import social from "../../images/social.png";
import logo from "../../images/icon.png";
import { Link } from "react-scroll";

const Wrapper = styled.div`
  display: flex;
  background-color: #000;
  color: var(--text-color);
  padding: 30px 100px;
  font-family: "Sora", sans-serif;
  .social-container {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .social-container img {
    width: 40px;
  }
  .social-container p {
    font-weight: 700;
  }
  .footer-links {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 20px;
    cursor: pointer;
  }
  @media only screen and (max-width: 435px) {
    .footer-links {
      display: flex;
      justify-content: center;
      align-items: center;  
      font-size: 20px;
      width: 100px;
    }
`;

const Footer = () => {
  return (
    <Wrapper id="footer">
      <Container fluid>
        <Row className="middeling">
          <Col md={12}>
            <div className="social-container ">
              <a href = "https://twitter.com/OneEyeChildNFT" target = "_blank"><img src={twitter} alt="#" /></a>
              <a href = "https://discord.com/invite/8d6ffbCsa6" target = "_blank"><img src={social} alt="#" /></a>
            </div>
          </Col>
          {/* <Col md={8}>
            <div className="d-flex justify-content-around align-items-center">
              <div className="footer-links">
                <Link to="oneeyechild">One Eye Child</Link>
              </div>
              <div className="footer-links">
                <Link to="story">Story</Link>
              </div>
              <div className="footer-links">
                <Link to="roadmap">Roadmap</Link>
              </div>
              <div className="footer-links">
                <Link to="faq">FAQ</Link>
              </div>
              <div className="footer-links">
                <Link to="theonemanteam">The One-Man Team</Link>
              </div>
            </div>
          </Col> */}
        </Row>
      </Container>
    </Wrapper>
  );
};

export default Footer;
