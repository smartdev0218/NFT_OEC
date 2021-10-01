import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

const Wrapper = styled.div`
  background-color: #000;
  color: #fff;
  padding: 120px 100px;
  .title {
    text-transform: uppercase;
    font-size: 40px;
    font-weight: 700;
    color: #fff;
    padding-bottom: 35px !important;
    font-family: "Roboto", sans-serif;
  }
  .h-title {
    text-transform: uppercase;
    font-size: 25px;
    font-weight: 700;
    color: #fff;
    padding-bottom: 35px !important;
    font-family: "Roboto", sans-serif;
  }
  hr {
    border: 3px solid white;
  }
  .sub-title {
    font-size: 20px;
    color: #fff;
  }
  .h-image {
    height: 220px;
    background: var(--main-color);
    border-radius: 8px;
  }
  .h-image img {
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
    <Wrapper id="faq">
      <Container fluid>
        <Row className="align-items-center">
          <Col md={12}>
            <h3 className="title">FAQ</h3><hr/>
            <h3 className="h-title">What is an NFT?</h3>
            <p className="sub-title">
              NFT stands for "non-fungible token."
            </p><hr/>
            <h3 className="h-title">Which blockchain is this NFT minted on?</h3>
            <p className="sub-title">
              Solana
            </p><hr/>
            <h3 className="h-title">How can I buy a One Eye Child?</h3>
            <p className="sub-title">
              You need a Solana wallet. We recommend Phantom or Solfare. 
              When our mint date has arrived, you can connect your wallet to this website and get your Child(ren)!
            </p><hr/>
            <h3 className="h-title">Where can I buy a One Eye Child?</h3>
            <p className="sub-title">
              You can mint it on this website. The date will be revealed in our discord.
            </p><hr/>
            <h3 className="h-title">Where can I view my One Eye Child?</h3>
            <p className="sub-title">
              You can view it in the wallet that you used to mint/purchase from! 
              Our store will be available in Solana marketplace so you can check it out over there too. 😊
            </p><hr/>
          </Col>
        </Row>
      </Container>
    </Wrapper>
    <hr/>
    </>
  );
};

export default HowItWorks;
