import React, { useState } from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import Sidebar from "./Sidebar";
import { Link } from "react-scroll";
import logo from "../../images/logo.png";
const Wrapper = styled.div`
  
  position: fixed;
  width: 100%;
  background-color : #000;
  left: 0;
  top: 0;
  .navbars {
    padding: 0 80px;
  }
  .logo {
    // color: #5d7600;
    color: #fff;
    font-size: 45px;
    width: 60px;
    border-radius: 100%;
    float: left;
  }
  a {
    text-decoration: none;
    text-transform: uppercase;
  }
  .menu-container a {
    color: #fff;
    text-decoration: none;
    font-size: 18px;
    font-weight: 500;
    font-family: "Roboto", sans-serif;
    padding: 10px 12px;
  }

  .hamburger {
    display: none;
    cursor: pointer;
  }

  @media only screen and (max-width: 991px) {
    .navbars {
      padding: 0 50px;
    }
    .logo {
      font-size: 50px;
    }

    .menu-container a {
      font-size: 16px;
      padding: 10px 16px;
      font-style: italic;
    }
  }
  @media only screen and (max-width: 953px) {
    .menu-container a {
      font-size: 15px;
      padding: 10px 8px;
    }
  }
  @media only screen and (max-width: 767px) {
    .navbars {
      padding: 0 30px;
    }
    .menu-container {
      display: none;
    }
    .hamburger {
      display: block;
    }
  }
`;

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => {
    setSidebar((prev) => !prev);
  };
  const menuItem = [
    { 
      text: "One Eye Child", 
      url: "oneeyechild" 
    },
    {
      text: "Story",
      url: "story",
    },
    {
      text: "Roadmap",
      url: "roadmap",
    },
    {
      text: "Faq",
      url: "faq",
    },
    {
      text: "The One-Man Team",
      url: "theonemanteam",
    },
    {
      text: "Social Media",
      url: "footer"
    },
  ];
  return (
    <Wrapper>
      <Container fluid className="py-3 navbars" xs={11}>
        <Row>
          <Col xs={6} md={2}>
            <Link to = "oneeyechild">
            <NavLink to="/oneeyechild" smooth={true} duration="500">
              <img className = "logo" src = {logo} alt = "" />
              <h1 className="logo">OEC</h1>
            </NavLink>
            </Link>
          </Col>

          <Col
            xs={6}
            md={10}
            className="d-flex justify-content-end align-items-center"
          >
            <div className="menu-container">
              {menuItem.map((el, i) => (
                <Link to = {el.url}>
                  <NavLink activeClassName="active-link" to={el.url} key={i} exact>
                    {el.text}
                  </NavLink>
                </Link>
              ))}
            </div>
            <GiHamburgerMenu
              className="hamburger"
              size="30"
              color="var(--text-color)"
              onClick={showSidebar}
            />
          </Col>
        </Row>
        {sidebar && <Sidebar menuItem={menuItem} showSidebar={showSidebar} />}
      </Container>
    </Wrapper>
  );
};

export default Navbar;
