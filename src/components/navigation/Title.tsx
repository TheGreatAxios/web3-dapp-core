import styled from 'styled-components';
import Config from '../../config';

const Container = styled.div`
  width: 25%;
  height: 100%;
  display: flex;
  align-items: center;
  h1 {
    padding-left: 16px;
  }
`;

const Title = () => {
  return (
    <Container>
      <h1>{Config.title}</h1>
    </Container>
  );
};

export default Title;

