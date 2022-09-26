import styled from 'styled-components';
import * as Component from '../components';
import Layout from '../internal/Layout';
import { ICollection } from '../types';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  min-height: 100vh;
  position: relative;
`;

const LandingPage = ({ collections }: { collections: ICollection[] }) => {
  return (
    <Container>
      <Layout>
        <Component.Landing.Collections collections={collections} />
        <Component.Landing.About />
      </Layout>
    </Container>
  );
};

export default LandingPage;

