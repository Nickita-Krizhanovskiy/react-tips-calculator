import Form from "./components/Form/Form";
import styled from "styled-components";

const App = () => {
  return (
    <StyledApp>
      <Form />
    </StyledApp>
  );
};
export default App;

const StyledApp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;