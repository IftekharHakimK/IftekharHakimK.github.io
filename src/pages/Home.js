import React from 'react';
import { Button, Typography } from 'antd';
import { Anchor, Col, Row } from 'antd';
import { Image } from 'antd';
const Home = () => {
  return (
    <Intro />
  );
};

export default Home;


const Intro = () => {
  return <>
    <Row>
      <Col sm={24} md={5}>
        <Image
          style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
          src="profile_image.jpeg"
          preview={false}
        />
      </Col>
      <Col sm={24} md={2}></Col>
      <Col sm={24} md={16}>
        <Typography.Title level={3}>Iftekhar Hakim Kaowsar</Typography.Title>
        <Typography.Text italic>Software Engineer, PriyoSys Limited (June 2023 - Present)</Typography.Text><br/>
        <Typography.Text italic>Graduated from CSE, BUET (2023)</Typography.Text>
        
        <Typography.Paragraph></Typography.Paragraph>
        <Typography.Paragraph>I am currently working as a Fullstack software engineer in PriyoSys Limited,
          focused on Fintech SaaS products. Backend and frontend development, system design and product design
          have been my job here.
        </Typography.Paragraph>
        <Typography.Paragraph>
          I like to indulge in analytical thinking and finding solutions of complex problems.
          I have running interests on security, cryptography and theoretical computer science. Currently I am having an study on
          quantum computing and quantum cryptography.
        </Typography.Paragraph>
        <Typography.Paragraph>
          I have already worked on theoretical computer science based research to solve parameterized string matching problem with mismatch
          tolerance. Our manuscript is under review for publication (joint first-authored).
        </Typography.Paragraph>
        <Typography.Paragraph>
          During my undergraduate life, I am honoured to participate in many international and national programming contests, notably
          45th ICPC World Finals 2021 in Dhaka and 47th ICPC World Final 2023 in Luxor. Pariticipating in competitive programming has been primary
          source of having practice of analytical thinking and solving complicated problems.
        </Typography.Paragraph>
      </Col>
    </Row>
  </>
}