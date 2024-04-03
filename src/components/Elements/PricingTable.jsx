import React from "react";
import styled from "styled-components";
// Components
import FullButton from "../Buttons/FullButton";
// Assets
// import RollerIcon from "../../assets/svg/Services/RollerIcon";
// import MonitorIcon from "../../assets/svg/Services/MonitorIcon";
// import BrowserIcon from "../../assets/svg/Services/BrowserIcon";
// import PrinterIcon from "../../assets/svg/Services/PrinterIcon";
import CheckMark from "../../assets/svg/Checkmark";
import silverIcon from "../../assets/img/pricing/silver.png";
import goldIcon from "../../assets/img/pricing/gold.png";
import platinumIcon from "../../assets/img/pricing/platinum.png";
import tintImage from "../../assets/img/services/tint.PNG";

export default function PricingTable({ icon, price, title, text,  offers, action }) {
  let getImage;

  switch (icon) {
    case "silverIcon":
      getImage = <img src={silverIcon} alt="Silver" />;
      break;
    case "goldIcon":
      getImage = <img src={goldIcon} alt="Gold" />;
      break;
    case "platinumIcon":
      getImage = <img src={platinumIcon} alt="Platinum" />;
      break;
    case "tintImage":
      getImage = <img src={tintImage} alt="Tint" />;
      break;
    default:
      getImage = <img src={silverIcon} alt="Bucket" />;
      break;
  }

  return (
    <Wrapper className="whiteBg radius8 shadow">
      <div className="flexSpaceCenter">
        <ImageStyle>{getImage}</ImageStyle>
        <p className="font30 extraBold">{price}</p>
      </div>
      <div style={{ margin: "30px 0" }}>
        <h4 className="font30 extraBold">{title}</h4>
        <p className="font13">{text}</p>
      </div>
      <div>
        {offers
          ? offers.map((item, index) => (
              <div className="flexNullCenter" style={{ margin: "15px 0" }} key={index}>
                <div style={{ position: "relative", top: "-1px", marginRight: "15px" }}>
                  {item.cheked ? (
                    <div style={{ minWidth: "20px" }}>
                      <CheckMark />
                    </div>
                  ) : (
                    <div style={{ minWidth: "20px" }}></div>
                  )}
                </div>
                <p className="font20 extraBold">{item.name}</p>
              </div>
            ))
          : null}
      </div>
      <div style={{ maxWidth: "120px", margin: "30px auto 0 auto" }}>
        <FullButton title="Buy" action={action} />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  text-align: left;
  padding: 20px 30px;
  margin-top: 30px;
`;

const ImageStyle = styled.div`
  img {
    max-width: 60px; /* Adjust the max-width as needed */
    max-height: 60px; /* Adjust the max-height as needed */
    display: block;
    margin: 0 auto; /* Center the image horizontally */
  }
`;