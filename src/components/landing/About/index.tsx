import styled from 'styled-components';
import Content from '../../../config/about.json';

const Container = styled.div`
  width: 100%;
  height: 400px;
  position: relative;
`;

const AboutTitle = styled.h2`
  width: 100%;
  position: absolute;
  top: 5%;
  left: 0;
`;

const AboutContentContainer = styled.div`
  position: absolute;
  top: 15%;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
`;
const Title = styled.h5``;
const Data = styled.p``;


const LandingAbout = () => {
  return (
    <Container>
      <AboutTitle>{Content.title}</AboutTitle>
      <AboutContentContainer>
        <br />
        <Title>{Content.section1.title}</Title>
        <br />
        <Data>{Content.section1.content}</Data>
        <br />
        <Title>{Content.section2.title}</Title>
        <br />
        <Data>{Content.section2.content}</Data>
      </AboutContentContainer>
    </Container>
  );
};

export default LandingAbout;

