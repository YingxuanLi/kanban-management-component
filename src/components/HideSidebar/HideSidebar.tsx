import React from "react";
import { IconHideSidebar } from "../../../icons";
import styled from "styled-components";
import { colors } from "../../styles/theme-preval";
const FlexRowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 10px;
  align-items: center;
`;

const HideSidebar = () => {
  return (
    <FlexRowWrapper>
      <IconHideSidebar dimension={15} color="#828FA3" />
      <div style={{ color: colors.medium_grey }}>
        <h3>Hide Sidebar</h3>
      </div>
    </FlexRowWrapper>
  );
};

export default HideSidebar;
