import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
// Components
import Sidebar from "../Nav/Sidebar";
import Backdrop from "../Elements/Backdrop";
// Assets
import logoImage from "../../assets/img/logo.png"; // Import the PNG logo image
import BurgerIcon from "../../assets/svg/BurgerIcon";
import instaIcon from "../../assets/img/instagram.png"; // Import the Instagram icon image
import tiktokIcon from "../../assets/img/tiktok.png"; 

export default function TopNavbar() {
  const [y, setY] = useState(window.scrollY);
  const [sidebarOpen, toggleSidebar] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => setY(window.scrollY));
    return () => {
      window.removeEventListener("scroll", () => setY(window.scrollY));
    };
  }, [y]);


  return (
    <>
      <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      {sidebarOpen && <Backdrop toggleSidebar={toggleSidebar} />}
      <Wrapper className="flexCenter animate whiteBg" style={y > 100 ? { height: "60px" } : { height: "80px" }}>
        <NavInner className="container flexSpaceCenter">
          <Link className="pointer flexNullCenter" to="home" smooth={true}>
            <img src={logoImage} alt="Logo" style={{ width: "60px", height: "60px", marginRight: "10px" }} />
          </Link>
          <BurderWrapper className="pointer" onClick={() => toggleSidebar(!sidebarOpen)}>
            <BurgerIcon />
          </BurderWrapper>
          <UlWrapper className="flexNullCenter">
            <li className="semiBold font15 pointer">
              <StyledLink activeClass="active" to="home" spy={true} smooth={true} offset={-80}>
                Home
              </StyledLink>
            </li>
            <li className="semiBold font15 pointer">
              <StyledLink activeClass="active" to="services" spy={true} smooth={true} offset={-80}>
                Services
              </StyledLink>
            </li>
            <li className="semiBold font15 pointer">
              <StyledLink activeClass="active" to="projects" spy={true} smooth={true} offset={-80}>
                Projects
              </StyledLink>
            </li>
            <li className="semiBold font15 pointer">
              <StyledLink activeClass="active" to="pricing" spy={true} smooth={true} offset={-80}>
                Pricing
              </StyledLink>
            </li>
            <li className="semiBold font15 pointer">
              <StyledLink activeClass="active" to="contact" spy={true} smooth={true} offset={-80}>
                Contact
              </StyledLink>
            </li>
          </UlWrapper>
          <UlWrapperRight className="flexNullCenter">
            <StyledLinkImage href="https://www.instagram.com/jimenez_mobile_detailingtint/">
              <img src={instaIcon} alt="Instagram" style={{ width: "35px", height: "35px", marginRight: "15px" }} />
            </StyledLinkImage>
            <StyledLinkImage href="https://www.tiktok.com/@jimenez_detailingtint">
              <img src={tiktokIcon} alt="TikTok" style={{ width: "35px", height: "35px" }} />
            </StyledLinkImage>
            {/* <li className="semiBold font15 pointer flexCenter">
              <a href="/" className="radius8 lightBg" style={{ color: "black", padding: "10px 15px" }}>
                Get Started
              </a>
            </li> */}
          </UlWrapperRight>
        </NavInner>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  background-color: black;
`;

const NavInner = styled.div`
  position: relative;
  height: 100%;
`

const BurderWrapper = styled.button`
  outline: none;
  border: 0px;
  background-color: transparent;
  height: 100%;
  padding: 0 15px;
  display: none;
  @media (max-width: 760px) {
    display: block;
  }
`;

const UlWrapper = styled.ul`
  display: flex;
  @media (max-width: 760px) {
    display: none;
  }
`;

const UlWrapperRight = styled.ul`
  @media (max-width: 760px) {
    display: none;
  }
`;

const StyledLink = styled(Link)`
  padding: 10px 15px;
  color: white;
  transition: color 0.3s ease; /* Adding transition for color change */

  &:hover {
    color: #bcbcbc; /* Changing color on hover */
  }
`;

const StyledLinkImage = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: white;
  transition: color 0.3s ease; /* Adding transition for color change */

  &:hover {
    color: #bcbcbc; /* Changing color on hover */
  }
`;
