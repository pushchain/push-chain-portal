import React, { FC } from "react";
import styled from "styled-components";

import RewardsActivities from "./RewardsActivities";
import Footer from "../../structure/Footer";
import { useRewardsContext } from "../../context/rewardsContext";
import { RewardsUpdatedDashboard } from "./RewardsUpdatedDashboard";

const Rewards: FC = () => {
  return (
    <RewardsWrapper>

      <RewardsUpdatedDashboard />

      <RewardsActivities />

      <Footer />

    </RewardsWrapper>
  );
};

export default Rewards;

const RewardsWrapper = styled.div`
  width: 100%;
  margin: 0px auto 24px auto;
  display: flex;
  flex-direction: column;
  gap: 24px;
  box-sizing: border-box;
`;
