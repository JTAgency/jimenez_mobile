import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
// Assets
import logoImage from "../../assets/img/logo.png"; // Import the PNG logo image
export default function Contact() {

  const getCurrentYear = () => {
    return new Date().getFullYear();
  }

  return (
    <Wrapper>
      <div className="darkBg">
        <div className="container">
          <InnerWrapper className="flexSpaceCenter" style={{ padding: "30px 0" }}>
            <Link className="flexCenter animate pointer" to="home" smooth={true} offset={-80}>
              <img src={logoImage} alt="Logo" style={{ width: "60px", height: "60px", marginRight: "10px" }} />
              <h1 className="font15 extraBold whiteColor" style={{ marginLeft: "15px" }}>
                JIMENEZ MOBILE
              </h1>
            </Link>
            <StyleP className="whiteColor font13">
              © {getCurrentYear()} - <span className="purpleColor font13">JIMENEZ MOBILE</span> All Right Reserved | Developed by
              <StyledLink href="https://jartechagency.com" target="_blank" rel="noopener noreferrer"> Jartech</StyledLink>
            </StyleP>
            <Link className="whiteColor animate pointer font13" to="home" smooth={true} offset={-80}>
              Back to top
            </Link>
          </InnerWrapper>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;
const InnerWrapper = styled.div`
  @media (max-width: 550px) {
    flex-direction: column;
  }
`;
const StyleP = styled.p`
  @media (max-width: 550px) {
    margin: 20px 0;
  }
`;

const StyledLink = styled.a`
  color: #377dff; /* You can adjust the color as needed */
  text-decoration: none;
  font-size: 13px;
  transition: color 0.3s ease;
  
  &:hover {
    color: #004ddc; /* Adjust hover color as needed */
  }
`;