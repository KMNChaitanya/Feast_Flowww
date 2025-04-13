import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const WhoWeAreContainer = styled.section`
  padding: 50px 20px;
  background-color: #FFFFFF;
  text-align: center;
  id: 'who-we-are'; // This is incorrect syntax, use the id attribute below
`;

// Corrected approach: Add id via the component attribute
const WhoWeAre = () => {
  return (
    <WhoWeAreContainer id="who-we-are"> {/* Add id here */}
      <Title>Who We Are</Title>
      <Section>
        <SectionTitle>Our Mission</SectionTitle>
        <Paragraph>
          We are driven by a simple yet powerful vision: to reduce food waste and combat hunger on a global scale. Every day, restaurants, caterers, and individuals discard perfectly good food due to overproduction or uneaten portions. Meanwhile, millions face food insecurity. FeastFlow steps into this gap, connecting those with surplus food—whether it’s a single household or a bustling eatery—with non-governmental organizations (NGOs) ready to distribute it to those in need. We believe <Highlight>every meal matters</Highlight>, and our platform ensures no opportunity to feed someone is lost.
        </Paragraph>
      </Section>
      <Section>
        <SectionTitle>Our Team</SectionTitle>
        <Paragraph>
          Behind FeastFlow is a diverse and dedicated team united by a shared commitment to sustainability and social good. Our founders bring expertise in technology, logistics, and community outreach, while our growing network of volunteers and partners includes chefs, activists, and NGO leaders. Together, we leverage cutting-edge tools and heartfelt collaboration to create a seamless system that benefits both donors and recipients. Our team is based <Highlight>across the globe</Highlight>, but our impact knows no borders—we’re here to serve every community willing to join us.
        </Paragraph>
      </Section>
      <Section>
        <SectionTitle>Our Values</SectionTitle>
        <Paragraph>
          At the heart of FeastFlow are core values that guide everything we do:
        </Paragraph>
        <ul style={{ textAlign: 'left', paddingLeft: '20px' }}>
          <li><Highlight>Sustainability:</Highlight> We’re committed to reducing the environmental footprint of food waste, which contributes to greenhouse gas emissions and resource depletion.</li>
          <li><Highlight>Compassion:</Highlight> Every action we take is fueled by empathy for those facing hunger and a desire to uplift our communities.</li>
          <li><Highlight>Innovation:</Highlight> We embrace technology and creative solutions to streamline food donation and distribution.</li>
          <li><Highlight>Community:</Highlight> We thrive on collaboration, building a network of restaurants, individuals, and NGOs who share our vision.</li>
        </ul>
      </Section>
      <Section>
        <SectionTitle>Our Journey</SectionTitle>
        <Paragraph>
          FeastFlow began with a simple idea: what if we could turn surplus into sustenance? From humble beginnings, we’ve grown into a platform that has facilitated the redistribution of thousands of meals. Our journey is marked by milestones—partnering with local eateries, launching real-time tracking systems, and earning the trust of NGOs worldwide. As of April 2025, we’ve shared over 10,000 meals, engaged 500+ active donors, and collaborated with 100+ partner NGOs. But this is just the start—we’re committed to scaling our efforts and reaching new regions.
        </Paragraph>
      </Section>
      <Section>
        <SectionTitle>Why We Do It</SectionTitle>
        <Paragraph>
          Food waste is a global crisis. According to recent estimates, approximately one-third of all food produced worldwide is wasted, while 800 million people go hungry each day. This stark contrast fuels our passion. By connecting surplus food with those in need, we address immediate hunger and promote a culture of care and responsibility. Every meal saved is a step toward a more <Highlight>sustainable and equitable future</Highlight>—and that’s a future we’re building together.
        </Paragraph>
      </Section>
      <Section>
        <SectionTitle>Join Us</SectionTitle>
        <Paragraph>
          We invite you to be part of this transformative journey. Whether you’re a restaurant looking to donate leftovers, an individual with extra food to share, or an NGO eager to distribute meals, FeastFlow is your partner. Together, we can create a community where surplus food finds a purpose, nourishing those in need while protecting our planet. Learn more about how to get involved on our <Link to="/donate" style={{ color: '#4A90E2', textDecoration: 'underline' }}>Donate</Link> or <Link to="/ngo" style={{ color: '#4A90E2', textDecoration: 'underline' }}>NGO</Link> pages.
        </Paragraph>
      </Section>
    </WhoWeAreContainer>
  );
};

// Define styled components
const Title = styled.h1`
  font-size: 36px;
  color: #2A2A4A;
  margin-bottom: 30px;
  font-weight: 700;
`;

const Section = styled.div`
  max-width: 800px;
  margin: 0 auto 40px;
  text-align: left;
`;

const SectionTitle = styled.h2`
  font-size: 24px;
  color: #4A90E2;
  margin-bottom: 15px;
  font-weight: 600;
`;

const Paragraph = styled.p`
  font-size: 16px;
  color: #4A4A4A;
  line-height: 1.6;
  margin-bottom: 10px;
`;

const Highlight = styled.span`
  font-weight: bold;
  color: #2A2A4A;
`;

export default WhoWeAre;