import styled from 'styled-components';

const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
  background-color: #E8ECEF;
  color: #2A2A4A;
  text-align: center;
`;

const StatCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StatValue = styled.h2`
  font-size: 36px;
  margin: 0;
  color: #50C878;
`;

const StatLabel = styled.p`
  color: #4A4A4A;
  font-size: 14px;
  margin: 5px 0 0;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <StatCard>
        <StatValue>10,000+</StatValue>
        <StatLabel>Meals Shared</StatLabel>
      </StatCard>
      <StatCard>
        <StatValue>500+</StatValue>
        <StatLabel>Active Donors</StatLabel>
      </StatCard>
      <StatCard>
        <StatValue>100+</StatValue>
        <StatLabel>Partner NGOs</StatLabel>
      </StatCard>
    </FooterContainer>
  );
};

export default Footer;