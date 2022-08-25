import TextInput from "components/TextInput";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.background};
  border-radius: 6px;
  flex-direction: column;
  height: auto;
  width: auto;
  padding: 20px;
`;
const AddNewTask = () => {
  return (
    <Container>
      <TextInput label={"Title"} placeholder={"e.g. Take coffee break"} />
    </Container>
  );
};

export default AddNewTask;
