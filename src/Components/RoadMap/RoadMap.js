import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

const Wrapper = styled.div`
  background-color : #000;
  color: #fff;
  padding: 120px 100px;
  color: "var(--text-color)";
  .r-title {
    text-transform: uppercase;
    font-size: 40px;
    font-family: "Roboto", sans-serif;
    font-weight: 700;
  }
  .r-subtitle {
    padding-bottom: 60px !important;
  }
  .phase {
    width: 100%;
    padding: 10px 20px;
    background-color : #737373;
    border-radius: 30px;
    font-family: "Roboto", sans-serif;
  }
  .t-title {
    border-radius: 10px;
    width: 110px;
    font-size: 30px;
    font-weight: 700;
  }
  .m-title {
    font-size: 15px;
    font-weight: 700;
  }
  .r-text-container {
    display: flex;
  }
  .percent-container {
    wight: 70px;
    height: 70px;
  }
  .r-text {
    width: 70%;
    padding-top: 11px;
    padding-left: 20px;
    font-family: "Roboto", sans-serif;
  }
  @media only screen and (max-width: 991px) {
    padding: 120px 10px;
    .r-text-contaner {
      margin: 10px;
    }
    .r-text {
      padding: 0 10px;
    }
  }
  @media only screen and (max-width: 435px) {
    .r-text {
      width: 90%;
      padding: 0 10px;
    }
  }
`;

const RoadMap = () => {
  const roadmapArray = [
    {
      text: "5 Bulls will be randomly dirdropped to our early adopters Begin social media marketing push & banner advertisments ",
      percent: "Phase 1",
    },
    {
      text: "20,000 Donation with the help of the community choosing what organization allocate the money too Partner with secondary marketplace",
      percent: "Phase 2",
    },

    {
      text: "Exclusive Binance Bull Merch will be released (T Shirts, Hoodies & More) $5,000 BNB Giveaway ",
      percent: "Phase 3",
    },
    {
      text: " Community grant/wallet is launched with $25,000    Bull Marketplace Released ",
      percent: "Phase 4",
    },
  ];
  return (
    <>
    <Wrapper id="roadmap">
      <Container fluid>
        <h3 className="r-title">Roadmap</h3>
        <p className=" r-subtitle">
          {/* Once we have hit the precentage of mints we will begin working on the
          state goal */}
        </p>

        <Col>
          {/* <div className="row">
            {roadmapArray.map((el, i) => {
              return (
                <div key={i} className="r-text-container my-2">
                  <di className="my-2 percent-box">
                    <div className="middeling percent">{el.percent}</div>
                  </di>
                  <div className="r-text ">{el.text}</div>
                </div>
              );
            })}
          </div> */}
          <div className = "phase">
            <div className = "t-title">Phase 1</div>
            <ul>
              <li className = "m-title">Social Media Marketing</li>
              <li className = "m-title">Website</li>
            </ul>
          </div>
          <br/>
          <div className = "phase">
            <div className = "t-title">Phase 2</div>
              <ul>
                <li className = "m-title">Whitelist for presales</li>
                <li className = "m-title">Sales Launch</li>
                <li className = "m-title">Setting up accounts on Solana Marketplace (e.g. Digital Eyes, Solanart, Solsea)</li>
                <li className = "m-title">Floor Sweep</li>
              </ul>
          </div>
          <br/>
          <div className = "phase">
            <div className = "t-title">Phase 3</div>
              <ul>
                <li className = "m-title">Developing OEC Game concept & designs</li>
                <li className = "m-title">Merchandize giveaways for OEC holders and public</li>
                <li className = "m-title">Setting up Twitter for sales alert</li>
              </ul>
          </div>
          <br/>
          <div className = "phase">
            <div className = "t-title">Phase 4</div>
              <ul>
                <li className = "m-title">Designing OEC girls for 2022</li>
                <li className = "m-title">Game BETA launch for OEC holders only</li>
                <li className = "m-title">Social Media Marketing</li>
              </ul>
          </div>
        </Col>
      </Container>
    </Wrapper>
    <hr/>
    </>
  );
};

export default RoadMap;
