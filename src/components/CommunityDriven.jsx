import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #F5F7FA;
  color: #2A2A4A;
`;

const Content = styled.div`
  padding: 50px 20px;
  text-align: center;
  flex: 1;
`;

const Title = styled.h1`
  font-size: 36px;
  margin-bottom: 20px;
  color: #4A90E2;
`;

const Description = styled.p`
  font-size: 16px;
  color: #4A4A4A;
  max-width: 600px;
  margin: 0 auto 30px;
`;

const JoinButton = styled.button`
  padding: 10px 20px;
  background-color: #F5A623;
  color: #FFFFFF;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #D68A1A;
  }
`;

const CommunityDriven = () => {
  return (
    <Container>
      <Header />
      <Content>
        <Title>Community Driven</Title>
        <Description>
          Join a vibrant network of caring individuals and organizations dedicated to making a difference. Together, we connect surplus food with those in need, fostering a stronger, more compassionate community. Get involved today!
        </Description>
        <JoinButton>Join Our Community</JoinButton>
      </Content>
      <Footer />
    </Container>
  );
};

export default CommunityDriven;