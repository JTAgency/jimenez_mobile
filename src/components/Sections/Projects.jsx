import React from "react";
import styled from "styled-components";
// Components
// import ProjectBox from "../Elements/ProjectBox";
import FullButton from "../Buttons/FullButton";
// Assets
// import ProjectImg1 from "../../assets/img/projects/1.png";
// import ProjectImg2 from "../../assets/img/projects/2.png";
// import ProjectImg3 from "../../assets/img/projects/3.png";
// import ProjectImg4 from "../../assets/img/projects/4.png";
// import ProjectImg5 from "../../assets/img/projects/5.png";
// import ProjectImg6 from "../../assets/img/projects/6.png";
// import AddImage2 from "../../assets/img/add/add2.png";

import { InstagramEmbed } from 'react-social-media-embed';

export default function Projects() {
  return (
    <Wrapper id="projects">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Work Showcase</h1>
            <p className="font13">
              Browse through recent Instagram posts showcasing our expert car detailing work.
              <br />
               From stunning paint finishes to pristine interiors, get a glimpse of the quality and
              <br />
              precision we bring to every vehicle we service
            </p>
          </HeaderInfo>
          <div className="row textCenter" style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ margin: '0 10px' }}>
              <InstagramEmbed url="https://www.instagram.com/p/Civ-GWypxpj/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==/" width={376} />
            </div>
            <div style={{ margin: '0 10px' }}>
              <InstagramEmbed url="https://www.instagram.com/p/CXpYwRyl8Wi/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==/" width={376} />
            </div>
            <div style={{ margin: '0 10px' }}>
              <InstagramEmbed url="https://www.instagram.com/p/C4voopRxdsl/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" width={376} />
            </div>
            <div style={{ margin: '0 10px' }}>
              <InstagramEmbed url="https://www.instagram.com/p/CqT3zB3vy-_/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==/" width={376} />
            </div>
            <div style={{ margin: '0 10px' }}>
              <InstagramEmbed url="https://www.instagram.com/p/Cpa_D3xymer/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==/" width={376} />
            </div>
            <div style={{ margin: '0 10px' }}>
              <InstagramEmbed url="https://www.instagram.com/p/C2k_6pxSaNk/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==/" width={376} />
            </div>
          </div>

          <div className="row flexCenter">
            <div style={{ margin: "50px 0", width: "200px" }}>
              <a href="https://www.instagram.com/jimenez_mobile_detailingtint/" target="_blank" rel="noopener noreferrer">
                <FullButton title="Load More"/>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="lightBg">
        <div className="container">
          <Advertising className="flexSpaceCenter">
            <AddLeft>
              <AddLeftInner>
                <ImgWrapper className="flexCenter">
                  <img className="radius8" src={AddImage2} alt="add" />
                </ImgWrapper>
              </AddLeftInner>
            </AddLeft>
            <AddRight>
              <h4 className="font15 semiBold">A few words about company</h4>
              <h2 className="font40 extraBold">A Study of Creativity</h2>
              <p className="font12">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
                diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              </p>
              <ButtonsRow className="flexNullCenter" style={{ margin: "30px 0" }}>
                <div style={{ width: "190px" }}>
                  <FullButton title="Get Started" action={() => alert("clicked")} />
                </div>
                <div style={{ width: "190px", marginLeft: "15px" }}>
                  <FullButton title="Contact Us" action={() => alert("clicked")} border />
                </div>
              </ButtonsRow>
            </AddRight>
          </Advertising>
        </div>
      </div> */}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;
// const Advertising = styled.div`
//   padding: 100px 0;
//   margin: 100px 0;
//   position: relative;
//   @media (max-width: 1160px) {
//     padding: 60px 0 40px 0;
//   }
//   @media (max-width: 860px) {
//     flex-direction: column;
//     padding: 0 0 30px 0;
//     margin: 80px 0 0px 0;
//   }
// `;
// const ButtonsRow = styled.div`
//   @media (max-width: 860px) {
//     justify-content: space-between;
//   }
// `;
// const AddLeft = styled.div`
//   position: relative;
//   width: 50%;
//   p {
//     max-width: 475px;
//   }
//   @media (max-width: 860px) {
//     width: 80%;
//     order: 2;
//     text-align: center;
//     h2 {
//       line-height: 3rem;
//       margin: 15px 0;
//     }
//     p {
//       margin: 0 auto;
//     }
//   }
// `;
// const AddRight = styled.div`
//   width: 50%;
//   @media (max-width: 860px) {
//     width: 80%;
//     order: 2;
//   }
// `;
// const AddLeftInner = styled.div`
//   width: 100%;
//   position: absolute;
//   top: -300px;
//   left: 0;
//   @media (max-width: 1190px) {
//     top: -250px;
//   }
//   @media (max-width: 920px) {
//     top: -200px;
//   }
//   @media (max-width: 860px) {
//     order: 1;
//     position: relative;
//     top: -60px;
//     left: 0;
//   }
// `;
// const ImgWrapper = styled.div`
//   width: 100%;
//   padding: 0 15%;
//   img {
//     width: 100%;
//     height: auto;
//   }
//   @media (max-width: 400px) {
//     padding: 0;
//   }
// `;
