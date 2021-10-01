import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import childimage from "../../images/GiveawayBanner.png";
import back_ground from "../../images/back_ground.png";
import Navbar from "../Navbar/Navbar";
import OEC1 from "../../images/OEC1.gif";

const Wrapper = styled.div`
  font-family: "Sora", sans-serif;
  font-size: 30px;
  background-color : #000;
  color: #fff;
  padding: 120px 100px;
  padding-top: 250px;
  .h-title {
    color: #fff;
    text-transform: uppercase;
    font-size: 40px;
    font-weight: 700;
    padding-bottom: 35px !important;
    font-family: "Roboto", sans-serif;
  }
  .m-title {
    font-size: 30px;
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
    <Wrapper id="oneeyechild" >
      
      <Container fluid >
        <Row className="align-items-center">
          <Col md={6}>
            <h3 className="h-title">One Eye Child NFT</h3>
            <p className="py-3 m-title">
            These children were beautifully designed with abstract colors to promote the 
            love of differences in the world. They were specially hand-drawn over days and nights.
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
              <img src={OEC1} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </Wrapper>
    <hr />
    </>
  );
};

export default HowItWorks;
