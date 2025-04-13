import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const HeroContainer = styled.div`
  text-align: center;
  padding: 50px 20px;
  background-color: #E8ECEF;
  min-height: 400px; /* Increased height for better visual impact */
  position: relative;
  overflow: hidden;

  /* Background image slideshow */
  background: linear-gradient(rgba(232, 236, 239, 0.7), rgba(232, 236, 239, 0.7)), /* Overlay for readability */
             url('/images/image1.jpg') no-repeat center/cover;
  animation: slideBackground 15s infinite;

  /* Define the keyframes for the slideshow */
  @keyframes slideBackground {
    0% {
      background-image: linear-gradient(rgba(232, 236, 239, 0.7), rgba(232, 236, 239, 0.7)),
                        url('/images/image1.jpg');
    }
    33% {
      background-image: linear-gradient(rgba(232, 236, 239, 0.7), rgba(232, 236, 239, 0.7)),
                        url('/images/image2.jpg');
    }
    66% {
      background-image: linear-gradient(rgba(232, 236, 239, 0.7), rgba(232, 236, 239, 0.7)),
                        url('/images/image3.jpg');
    }
    100% {
      background-image: linear-gradient(rgba(232, 236, 239, 0.7), rgba(232, 236, 239, 0.7)),
                        url('/images/image4.jpg');
    }
  }
`;

const Title = styled.h1`
  font-size: 48px;
  margin-bottom: 10px;
  color: #2A2A4A;
  position: relative;
  z-index: 1;
`;

const Subtitle = styled.p`
  font-size: 16px;
  color: #4A4A4A;
  margin-bottom: 30px;
  position: relative;
  z-index: 1;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin: 0 10px;
  cursor: pointer;
  background: ${props => (props.primary ? '#F5A623' : '#4A90E2')};
  color: #FFFFFF;
  border: none;
  border-radius: 4px;
  &:hover {
    background: ${props => (props.primary ? '#D68A1A' : '#357ABD')};
  }
`;

const HeroSection = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token'); // Check if user is logged in

  const handleDonateClick = () => {
    if (token) {
      navigate('/donate');
    } else {
      navigate('/login'); // Redirect to login/signup page if not logged in
    }
  };

  const handleNGOClick = () => {
    if (token) {
      navigate('/ngo');
    } else {
      navigate('/login'); // Redirect to login/signup page if not logged in
    }
  };

  return (
    <HeroContainer>
      <Title>Connecting Surplus Food with Those in Need</Title>
      <Subtitle>Join our mission to reduce food waste and hunger. Connect with local NGOs and make a difference in your community.</Subtitle>
      <div>
        <Button primary onClick={handleDonateClick}>
          Start Donating
        </Button>
        <Button onClick={handleNGOClick}>
          Receive Surplus as NGO
        </Button>
      </div>
    </HeroContainer>
  );
};

export default HeroSection;