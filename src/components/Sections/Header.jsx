import React from "react";
import styled, { keyframes } from "styled-components";
// Components
// import FullButton from "../Buttons/FullButton";
// Assets
// import HeaderImage from "../../assets/img/header-img.png";
// import QuotesIcon from "../../assets/svg/Quotes";
// import Dots from "../../assets/svg/Dots";
import HeaderVideo from "../../assets/videos/vid2.mp4"; // Import the video file

export default function Header() {
  
  const handleScroll = () => {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Wrapper id="home" className="container flexSpaceCenter">
      <VideoBackground autoPlay muted loop>
        <source src={HeaderVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </VideoBackground>
      <MainSide className="flexCenter">
        <div>
        <StyledH1 className="extraBold font60">JIMINEZ MOBILE</StyledH1>
          <HeaderP className="font20 semiBold">
            AUTO DETAILING AND TINT
          </HeaderP>
          <div style={{ marginLeft: '50%' }}>
            <DownArrow onClick={handleScroll} />
          </div>
          {/* <BtnWrapper>
            <FullButton title="Get Started" />
          </BtnWrapper> */}
        </div>
      </MainSide>
      {/* <RightSide>
        <ImageWrapper>
          <Img className="radius8" src={HeaderImage} alt="office" style={{zIndex: 9}} />
          <QuoteWrapper className="flexCenter darkBg radius8">
            <QuotesWrapper>
              <QuotesIcon />
            </QuotesWrapper>
            <div>
              <p className="font15 whiteColor">
                <em>Friends, such as we desire, are dreams and fables. Friendship demands the ability to do without it.</em>
              </p>
              <p className="font13 orangeColor textRight" style={{marginTop: '10px'}}>Ralph Waldo Emerson</p>
            </div>
          </QuoteWrapper>
          <DotsWrapper>
            <Dots />
          </DotsWrapper>
        </ImageWrapper>
        <GreyDiv className="lightBg"></GreyDiv>
      </RightSide> */}
    </Wrapper>
  );
}


const Wrapper = styled.section`
  padding-top: 80px;
  width: 100%;
  min-height: 100vh; /* Set minimum height to 100% of viewport height */
  @media (max-width: 960px) {
    flex-direction: column;
    min-height: 100vh; /* Set minimum height to 100% of viewport height */
  }
`;

const MainSide = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center; /* Added to center text horizontally */
  @media (max-width: 960px) {
    width: 100%;
    order: 2;
    margin: 50px 0;
    text-align: center;
  }
  @media (max-width: 560px) {
    margin: 80px 0 50px 0;
  }
`;

const VideoBackground = styled.video`
  position: absolute;
  top: 50px;
  left: 0;
  width: 100%;
  height: 100%;
  min-height: 100%;
  z-index: -1;
  opacity: 0.6;
  object-fit: cover; /* This will zoom in the video to cover the entire container */

  @media (max-width: 768px) {
    height: 100%;
    width: auto;
  }
`;


const StyledH1 = styled.h1`
  mix-blend-mode: Normal;
  color: Black;
  letter-spacing: 10px;
  font-family: Helvetica, sans-serif; /* Changed font */
`;

const HeaderP = styled.div`
  max-width: 470px;
  padding: 15px 0 50px 0;
  line-height: 1.5rem;
  letter-spacing: 5px; /* Added letter spacing */
  font-family: Arial, sans-serif; /* Changed font */
  @media (max-width: 960px) {
    padding: 15px 0 50px 0;
    text-align: center;
    max-width: 100%;
  }
  padding: 15px;
  color: Black;
  margin: 0 auto; /* Center the button horizontally */
`;

// const BtnWrapper = styled.div`
//   max-width: 190px;
//   margin: 0 auto; /* Center the button horizontally */
//   @media (max-width: 960px) {
//     margin: 0 auto; /* Center the button horizontally for smaller screens */
//   }
// `;

const jumpInfinite = keyframes`
  0% {
    margin-top: 0;
  }
  50% {
    margin-top: 5px;
  }
  100% {
    margin-top: 0;
  }
`;

// Styled component for the down arrow
const DownArrow = styled.div`
  position: absolute;
  width: 0;
  height: 30px;
  border: 2px solid;
  border-radius: 2px;
  cursor: pointer; /* Change cursor to pointer when hovering */

  &:after {
    content: " ";
    position: absolute;
    top: 8px;
    left: -10px;
    width: 16px;
    height: 16px;
    border-bottom: 4px solid;
    border-right: 4px solid;
    border-radius: 4px;
    transform: rotateZ(45deg);
  }

  // Apply the animation to the styled component
  animation: ${jumpInfinite} 1.0s infinite;
`;

// const RightSide = styled.div`
//   width: 50%;
//   height: 100%;
//   @media (max-width: 960px) {
//     width: 100%;
//     order: 1;
//     margin-top: 30px;
//   }
// `;

// const GreyDiv = styled.div`
//   width: 30%;
//   height: 700px;
//   position: absolute;
//   top: 0;
//   right: 0;
//   z-index: 0;
//   @media (max-width: 960px) {
//     display: none;
//   }
// `;
// const ImageWrapper = styled.div`
//   display: flex;
//   justify-content: flex-end;
//   position: relative;
//   z-index: 9;
//   @media (max-width: 960px) {
//     width: 100%;
//     justify-content: center;
//   }
// `;
// const Img = styled.img`
//   @media (max-width: 560px) {
//     width: 80%;
//     height: auto;
//   }
// `;
// const QuoteWrapper = styled.div`
//   position: absolute;
//   left: 0;
//   bottom: 50px;
//   max-width: 330px;
//   padding: 30px;
//   z-index: 99;
//   @media (max-width: 960px) {
//     left: 20px;
//   }
//   @media (max-width: 560px) {
//     bottom: -50px;
//   }
// `;
// const QuotesWrapper = styled.div`
//   position: absolute;
//   left: -20px;
//   top: -10px;
// `;
// const DotsWrapper = styled.div`
//   position: absolute;
//   right: -100px;
//   bottom: 100px;
//   z-index: 2;
//   @media (max-width: 960px) {
//     right: 100px;
//   }
//   @media (max-width: 560px) {
//     display: none;
//   }
// `;


