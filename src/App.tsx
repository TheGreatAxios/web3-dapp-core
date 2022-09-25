import Navigation from "./components/navigation/Navigation";
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-width: 100vw;
  max-width: 100vw;
  min-height: 100vh;

`;
export interface IProps {
  v: string;
}

function App() {
  const props: IProps = { v: "This works" }

  return (
    <Container>
      <Navigation />
    </Container>
  );
}

export default App
