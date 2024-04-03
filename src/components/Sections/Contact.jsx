import React from "react";
import styled from "styled-components";
import instgramIcon from "../../assets/img/contact/instagram_black.png";
import phoneIcon from "../../assets/img/contact/phone.png";

export default function Contact() {
  // Generate random phone number and Instagram username
  const phoneNumber = "+1 (213) 219-8237";
  const instagramUsername = "@jimenez_mobile_detailingtint";

  return (
    <Wrapper id="contact">
      <div className="lightBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Let's get in touch</h1>
            <p className="font13">
              Ready to revitalize your vehicle? Reach out today to schedule your next detailing session. Let's 
              <br />
              bring back that showroom shine together.
            </p>
            <ContactInfo>
              <ContactItem>
                <img src={phoneIcon} alt="Phone Icon" />
                <p><strong>{phoneNumber}</strong> (Call or Text)</p>
              </ContactItem>
              <ContactItem>
                <img src={instgramIcon} alt="Instagram Icon" />
                <p><strong>{instagramUsername}</strong></p>
              </ContactItem>
            </ContactInfo>
            <p className="font13">
              Covering LA and surrounding areas.
            </p>
          </HeaderInfo>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;

const HeaderInfo = styled.div`
  padding: 70px 0 30px 0;
  @media (max-width: 860px) {
    text-align: center;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;

  img {
    width: 30px;
    height: auto;
    margin-right: 10px;
  }

  p {
    margin: 0;
    font-size: 16px;
  }

  strong {
    font-weight: bold;
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
`;
