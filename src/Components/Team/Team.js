import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import team1 from "../../images/team1.png";

const Wrapper = styled.div`
  padding:120px 100px;
  background-color : #000;
  color: #fff;
  
  .t-title {
    text-transfomr: uppercase;
    font-size:40px ;
    font-weight:700;
    font-family: "Sora", sans-serif;
    // font-style: italic;
  }
  .box img{
    width: 150px;
    border-radius: 20px;
  }
  .team-text{
      font-size:25px;
      margin-left:15px !important;
      font-family: "Roboto", sans-serif;
      font-weight:700;
  }
  .position1{
    font-size:20px;
    font-weight:500;
  }
  .position2{
    font-size:14px;
    font-weight:500;
  }
  
}

@media only screen and (max-width: 435px) {
  padding: 120px 10px;
  .box img{
    width: 150px;
    border-radius: 20px;
    background: var(--main-color);
  }
  .team-text{
    font-size:15px;
  }
  .position1{
    font-size:20px;
    font-weight:500;
  }
  .position2{
    font-size:11px;
  }
  .style1 {
    flex: 100%;
    padding-bottom: 20px;
  }
  .style2 {
    flex: 100%;
  }
}
`;

const Team = () => {
  return (
    <Wrapper id="theonemanteam">
      <Container fluid>
        <h3 className="t-title">The One-Man Team</h3>
        {/* <p className="py-4">
          Binance Bulls was created by two friends that have a love for the
          Binance Smart Chain ecosystem & have a love <br /> for art.
        </p> */}
        <Row className="py-4">
          <Col xs="12" sm="12" className="d-flex style1">
            <div className="box">
              <img src={team1} alt="" />
            </div>

            <p className="team-text">
              Reibow <br />
              <span className = "position1">Goddess</span> <br/>
              <span className = "position2">
                I’m just the creator of OEC. Just loving to binge on yogurt while watching anime.
              </span>
            </p>
          </Col>
          {/* <Col xs="6" sm="6" className="d-flex style2">
            <div className="box">
              <img src="" alt="" />
            </div>
            <p className="team-text">
              Crypto Jake <br />{" "}
              <span className="position">Marketing Manager</span>
            </p>
          </Col> */}
        </Row>
      </Container>
    </Wrapper>
  );
};

export default Team;
