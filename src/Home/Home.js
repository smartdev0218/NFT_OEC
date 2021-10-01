import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import Navbar from "../Components/Navbar/Navbar";
import OneEyeChild from "../Components/OneEyeChild/OneEyeChild";
import Story from "../Components/Story/Story";
import RoadMap from "../Components/RoadMap/RoadMap";
import Team from "../Components/Team/Team";
import Footer from "../Components/Footer/Footer";
import Faq from "../Components/FAQ/Faq";

const Wrapper = styled.div``;

const Home = () => {
  return (
    <Wrapper>
      <Navbar />
      <OneEyeChild />
      <Story />
      <RoadMap />
      <Faq />
      <Team />
      <Footer />
    </Wrapper>
  );
};

export default Home;
