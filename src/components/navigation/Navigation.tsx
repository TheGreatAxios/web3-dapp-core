import styled from 'styled-components';
import ThemeToggle from './ThemeToggle';
import Title from './Title';

const Container = styled.div`
  width: 100vw;
  height: 75px;
  background-color: var(--background-color);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Navigation = () => {
  return (
    <Container>
      <Title />
      <div>
        <ThemeToggle />
      </div>
    </Container>
  );
};

export default Navigation;

