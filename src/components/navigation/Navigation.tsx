import styled from 'styled-components';
import ThemeToggle from './ThemeToggle';
import Title from './Title';
import Web3Button from './Web3Button';

const Container = styled.div`
  width: 100vw;
  height: 75px;
  background-color: var(--background-color);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const ExtensionRow = styled.div`
  width: auto;
  min-width: 15%;
  display: flex;
  flex-direection: row;
  align-items: center;
  justify-content: space-between;
`;

const Navigation = () => {
  return (
    <Container>
      <Title />
      <ExtensionRow>
        <ThemeToggle />
        <Web3Button />
      </ExtensionRow>
    </Container>
  );
};

export default Navigation;

