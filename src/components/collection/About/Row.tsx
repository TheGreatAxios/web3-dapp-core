import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: space-between;
  justify-content: space-between;

  p {
    padding: 16px 32px;
  }

  @media(max-width: 864px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    p {
      padding: 4px 8px;
    }
  }

`;

const Label = styled.p`
  font-size: 1.15rem;
  font-weight: 700;
  @media(max-width: 864px) {
    font-size: 18px;
  }
`;

const Value = styled.p`
  word-break: break-word;
  @media(max-width: 864px) {
    font-size: 14px;
  }
`;

const AboutRow = ({
  label,
  value
}: {
  label: string,
  value: string
}) => {
  return (
    <Container>
      <Label>{label}</Label>
      <Value>{value}</Value>
    </Container>
  );
};

export default AboutRow;
