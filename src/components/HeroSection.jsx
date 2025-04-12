import styled from 'styled-components';

const HeroContainer = styled.div`
  text-align: center;
  padding: 50px 20px;
  background-color: #E8ECEF;
`;

const Title = styled.h1`
  font-size: 48px;
  margin-bottom: 10px;
  color: #2A2A4A;
`;

const Subtitle = styled.p`
  font-size: 16px;
  color: #4A4A4A;
  margin-bottom: 30px;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin: 0 10px;
  cursor: pointer;
  background: ${props => (props.primary ? '#F5A623' : '#4A90E2')};
  color: #FFFFFF;
  border: none;
  &:hover {
    background: ${props => (props.primary ? '#D68A1A' : '#357ABD')};
  }
`;

const HeroSection = () => {
  return (
    <HeroContainer>
      <Title>Connecting Surplus Food with Those in Need</Title>
      <Subtitle>Join our mission to reduce food waste and hunger. Connect with local NGOs and make a difference in your community.</Subtitle>
      <div>
        <Button primary>Start Donating</Button>
        <Button>Register as NGO</Button>
      </div>
    </HeroContainer>
  );
};

export default HeroSection;