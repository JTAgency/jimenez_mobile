import React from "react";
import styled from "styled-components";
// Components
import PricingTable from "../Elements/PricingTable";

export default function Pricing() {
  return (
    <Wrapper id="pricing">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Check Our Pricing</h1>
            <p className="font13">
              Discover unbeatable prices for top-tier car detailing on our website. From interior refreshes to 
              <br />
              exterior shine, find the perfect package to suit your budget and your car's needs.
            </p>
          </HeaderInfo>
          <TablesWrapper className="flexSpaceNull">
            <TableBox>
              <PricingTable
                icon="silverIcon"
                price="$99"
                title="Starter Wash"
                text="Will add description based on pricing."
                offers={[
                  { name: "Exterior Wash", cheked: true },
                  { name: "Interior Wash", cheked: false },
                  { name: "Engine Bay", cheked: false },
                  { name: "More items", cheked: false },
                ]}
                action={() => alert("clicked")}
              />
            </TableBox>
            <TableBox>
              <PricingTable
                icon="goldIcon"
                price="$199"
                title="Basic Wash"
                text="Will add description based on pricing."
                offers={[
                  { name: "Exterior Wash", cheked: true },
                  { name: "Interior Wash", cheked: true },
                  { name: "Engine Bay", cheked: false },
                  { name: "More items", cheked: false },
                ]}
                action={() => alert("clicked")}
              />
            </TableBox>
            <TableBox>
              <PricingTable
                icon="platinumIcon"
                price="$299"
                title="Premium Wash"
                text="Will add description based on pricing."
                offers={[
                  { name: "Basic Tint", cheked: true },
                  { name: "Interior Wash", cheked: true },
                  { name: "Engine Bay", cheked: true },
                  { name: "More items", cheked: true },
                ]}
                action={() => alert("clicked")}
              />
            </TableBox>
            <TableBox>
              <PricingTable
                icon="tintImage"
                price="$149-699"
                title="Window Tint"
                text="Will add description based on pricing."
                offers={[
                  { name: "Tint 1", cheked: false },
                  { name: "Tint 2", cheked: false },
                  { name: "Tint 3", cheked: false },
                  { name: "Tint 4", cheked: false },
                ]}
                action={() => alert("clicked")}
              />
            </TableBox>
          </TablesWrapper>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  padding: 50px 0;
`;
const HeaderInfo = styled.div`
  margin-bottom: 50px;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const TablesWrapper = styled.div`
  @media (max-width: 860px) {
    flex-direction: column;
  }
`;
const TableBox = styled.div`
  width: 31%;
  @media (max-width: 860px) {
    width: 100%;
    max-width: 370px;
    margin: 0 auto
  }
`;




