import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import GiveawayBanner from "../../images/GiveawayBanner.png";

const Wrapper = styled.div`
  // color: var(--text-color);
  background-color: #000;
  color: #fff;
  padding: 120px 100px;
  .h-title {
    text-transform: uppercase;
    font-size: 40px;
    font-weight: 700;
    color: #fff;
    padding-bottom: 35px !important;
    font-family: "Roboto", sans-serif;
    // font-style: italic;
  }
  .sub-title {
    font-size: 30px;
    color: #fff;
  }
  .h-image img {
    width: 100%;
    border-radius: 8%;
  }
  @media only screen and (max-width: 991px) {
    padding: 0px 10px;
  }
  @media only screen and (max-width: 767px) {
    padding-top: 80px;
  }
  @media only screen and (max-width: 435px) {
    padding: 120px 10px;
  }
`;

const HowItWorks = () => {
  return (
    <>
    <Wrapper id="story">
      <Container fluid>
        <Row className="align-items-center">
          <Col md={6}>
            <h3 className="h-title">Story</h3>
            <p className="py-3 sub-title">
              Children did not choose to be in this world, but they were brought into 
              this world due to human's desires. They were tasked with suffering beyond what 
              they can handle. One day, the Goddess could not bear to see them suffer and blessed 
              them with superpowers. 10,000 children were given special abilities in one of their 
              eyes so they could save the rest who were in the same situation.
            </p>
            {/* <p className="py-3">
              Your bull is stored as an ERC721 token on the Binance Smart Chain
              & hosted on IPS.
            </p>
            <p className="py-3">
              There are no bonding curves here. Buying a bull costs 0.15 bnb.
            </p> */}
          </Col>
          <Col md={6}>
            <div className="h-image">
              <img src={GiveawayBanner} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </Wrapper>
    <hr/>
    </>
  );
};

export default HowItWorks;
