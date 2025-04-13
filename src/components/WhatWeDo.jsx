import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const WhatWeDoContainer = styled.section`
  padding: 50px 20px;
  background-color: #F5F7FA;
  text-align: center;
`;

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

const WhatWeDo = () => {
  return (
    <WhatWeDoContainer id="what-we-do"> {/* Add id for scrolling */}
      <Title>What We Do</Title>
      <Section>
        <SectionTitle>How We Collect Surplus Food</SectionTitle>
        <Paragraph>
          Our journey begins with the collection of surplus food from a wide range of sources. Restaurants, cafes, and catering services often face overproduction, leaving behind perfectly good meals that would otherwise be discarded. Individuals, too, can contribute by donating extra food from events or home kitchens. We provide an easy-to-use platform where donors can schedule pickups or drop-offs, complete with guidelines to ensure <Highlight>food safety and quality</Highlight>.
        </Paragraph>
      </Section>
      <Section>
        <SectionTitle>Our Partnership with NGOs</SectionTitle>
        <Paragraph>
          Collaboration is at the core of what we do. We partner with a network of trusted non-governmental organizations (NGOs) who specialize in food distribution and community support. These partners are carefully selected for their expertise, reliability, and commitment to serving vulnerable populations. Our platform provides real-time updates, allowing NGOs to plan their routes and allocate resources effectively, ensuring food reaches those in need within hours.
        </Paragraph>
      </Section>
      <Section>
        <SectionTitle>Streamlining the Process</SectionTitle>
        <Paragraph>
          FeastFlow’s technology is designed to make donating and distributing food as simple as possible. Our user-friendly website and mobile app allow donors to log surplus food with just a few clicks, specifying quantities, types, and availability. For NGOs, our dashboard offers real-time tracking of donations, pickup schedules, and delivery statuses, complete with analytics to measure their impact. This streamlined approach eliminates barriers, empowering contributors and enabling NGOs to focus on their vital work.
        </Paragraph>
      </Section>
      <Section>
        <SectionTitle>Ensuring Safety and Quality</SectionTitle>
        <Paragraph>
          <Highlight>Safety</Highlight> is our top priority. We adhere to strict food handling and hygiene standards, working with donors and NGOs to ensure that all collected food meets health regulations. Our team provides training and resources to maintain quality throughout the process, from collection to distribution. This commitment builds trust with our partners, ensuring FeastFlow remains a reliable bridge between abundance and need.
        </Paragraph>
      </Section>
      <Section>
        <SectionTitle>Making a Difference</SectionTitle>
        <Paragraph>
          The impact of our work is measurable and meaningful. As of April 2025, we’ve facilitated the distribution of over 10,000 meals, engaged 500+ active donors, and collaborated with 100+ partner NGOs. Beyond the numbers, we’re fostering a cultural shift—encouraging communities to see surplus food as a resource rather than waste. Our gamification features, like earning badges and points, motivate donors and NGOs, creating a ripple effect of care and responsibility.
        </Paragraph>
      </Section>
      <Section>
        <SectionTitle>Get Involved</SectionTitle>
        <Paragraph>
          Ready to make a difference? Whether you’re a restaurant with extra food, an individual with leftovers, or an NGO looking to expand your reach, FeastFlow is here to help. Visit our <Link to="/donate" style={{ color: '#4A90E2', textDecoration: 'underline' }}>Donate</Link> page to start contributing, or explore our <Link to="/ngo" style={{ color: '#4A90E2', textDecoration: 'underline' }}>NGO</Link> section to join our network. Together, we can turn surplus into sustenance, building a future where no meal goes to waste.
        </Paragraph>
      </Section>
    </WhatWeDoContainer>
  );
};

export default WhatWeDo;