import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeatureCard from './components/FeatureCard';
import Footer from './components/Footer';
import LoginPage from './components/login';
import CommunityDriven from './components/CommunityDriven';
import Donate from './components/Donate';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import Impact from './components/Impact';
import NGO from './components/NGO';
import WhoWeAre from './components/WhoWeAre';
import WhatWeDo from './components/WhatWeDo'; // Import the new component

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const FeaturesContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 20px;
  background-color: #F5F7FA;
`;

// Home component containing your main landing content
const Home = () => {
  const navigate = useNavigate(); // Hook to handle navigation

  const features = [
    { icon: '⏱️', title: 'Real-time Updates', description: 'Track food donations and pickups in real-time through our live dashboard.', highlight: true, onClick: () => navigate('/dashboard') },
    { icon: '🏅', title: 'Gamification', description: 'Earn badges and points for your contributions to the community.', highlight: false },
    { icon: '📊', title: 'Impact Tracking', description: 'See your direct impact with detailed analytics and statistics.', highlight: false, onClick: () => navigate('/impact') },
    { icon: '❤️', title: 'Community Driven', description: 'Join a network of caring individuals and organizations making a difference.', highlight: false, onClick: () => navigate('/community-driven') },
  ];

  return (
    <>
      <Header />
      <HeroSection />
      <FeaturesContainer>
        {features.map((feature, index) => (
          <FeatureCard 
            key={index} 
            icon={feature.icon} 
            title={feature.title} 
            description={feature.description} 
            highlight={feature.highlight} 
            onClick={feature.onClick} // Pass the onClick handler
          />
        ))}
      </FeaturesContainer>
      <WhoWeAre />
      <WhatWeDo /> {/* Add WhatWeDo component here */}
      <Footer />
    </>
  );
};

const App = () => {
  return (
    <Container>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/impact" element={<Impact />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/community-driven" element={<CommunityDriven />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/ngo" element={<NGO />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </Container>
  );
};

export default App;