import styled from 'styled-components';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px;
  width: 200px;
  background: #FFFFFF;
  border-radius: 5px;
  margin: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: ${props => (props.onClick ? 'pointer' : 'default')}; /* Cursor changes to pointer if onClick is provided */
  transition: transform 0.2s; /* Smooth transition for hover effect */

  &:hover {
    border: 2px solid #50C878;
    transform: ${props => (props.onClick ? 'scale(1.05)' : 'none')}; /* Scale up on hover if clickable */
  }
`;

const Icon = styled.div`
  font-size: 24px;
  margin-bottom: 10px;
  color: #F5A623;
`;

const CardTitle = styled.h3`
  margin: 10px 0;
  color: #2A2A4A;
`;

const CardDescription = styled.p`
  color: #4A4A4A;
  font-size: 14px;
`;

const FeatureCard = ({ icon, title, description, highlight, onClick }) => {
  return (
    <Card highlight={highlight} onClick={onClick}>
      <Icon>{icon}</Icon>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </Card>
  );
};

export default FeatureCard;