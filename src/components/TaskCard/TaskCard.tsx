import styled from "styled-components";
import { colors } from "../../styles/theme-preval";
type TaskCardProps = {
  taskName: string;
  subTaskInfo: string;
};

const CardWrapper = styled.div`
  background-color: ${(props) => props.theme.background};
  padding: 15px;
  max-width: 280px;
  /* margin: 5px 1px 5px 1px; */
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;
const TaskName = styled.div`
  color: ${(props) => props.theme.color};
`;

const TaskCard = (taskCardProps: TaskCardProps) => {
  return (
    <>
      <CardWrapper>
        <TaskName>
          <h3>{taskCardProps.taskName}</h3>
        </TaskName>
        <div style={{ color: colors.medium_grey }}>
          <p>{taskCardProps.subTaskInfo}</p>
        </div>
      </CardWrapper>
    </>
  );
};

export default TaskCard;
