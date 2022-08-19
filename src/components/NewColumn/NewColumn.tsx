import styled from "styled-components";
import { colors } from "../../styles/theme-preval";

const NewColumnWrapper = styled.div`
  height: 814px;
  width: 280px;
  left: 0px;
  top: 0px;
  border-radius: 6px;
  background-color: rgba(233, 239, 250, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NewColumn = () => {
  return (
    <>
      <NewColumnWrapper>
        <h1 style={{ color: colors.medium_grey }}>+ New Column</h1>
      </NewColumnWrapper>
    </>
  );
};

export default NewColumn;
