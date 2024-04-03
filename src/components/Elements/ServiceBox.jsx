import React from "react";
import styled from "styled-components";
// Assets
import bucketImage from "../../assets/img/services/bucket.PNG";
import sprayImage from "../../assets/img/services/spray.PNG";
import tintImage from "../../assets/img/services/tint.PNG";
import engineImage from "../../assets/img/services/engine.PNG";

export default function ServiceBox({ icon, title, subtitle }) {
  let getImage;

  switch (icon) {
    case "bucketImage":
      getImage = <img src={bucketImage} alt="Bucket" />;
      break;
    case "sprayImage":
      getImage = <img src={sprayImage} alt="Spray" />;
      break;
    case "tintImage":
      getImage = <img src={tintImage} alt="Tint" />;
      break;
    case "engineImage":
      getImage = <img src={engineImage} alt="Engine" />;
      break;
    default:
      getImage = <img src={bucketImage} alt="Bucket" />;
      break;
  }

  return (
    <Wrapper className="flex flexColumn">
      <ImageStyle>{getImage}</ImageStyle>
      <TitleStyle className="font20 extraBold">{title}</TitleStyle>
      <SubtitleStyle className="font13">{subtitle}</SubtitleStyle>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;
const ImageStyle = styled.div`
  img {
    max-width: 100px; /* Adjust the max-width as needed */
    max-height: 100px; /* Adjust the max-height as needed */
    display: block;
    margin: 0 auto; /* Center the image horizontally */
  }
`;
const TitleStyle = styled.h2`
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
  padding: 40px 0;
  @media (max-width: 860px) {
    padding: 20px 0;
  }
`;
const SubtitleStyle = styled.p`
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
`;
