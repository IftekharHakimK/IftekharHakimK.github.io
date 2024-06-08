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
          src="https://media.licdn.com/dms/image/C5603AQH5QUPupkKZXg/profile-displayphoto-shrink_800_800/0/1621414689356?e=1723075200&v=beta&t=27mBALsaDhlkoJAa7UKtY9HVir39nKlNq-vyAaDRhrQ"
          preview={false}
        />
      </Col>
      <Col sm={24} md={2}></Col>
      <Col sm={24} md={16}>
        <Typography.Title level={3}>Iftekhar Hakim Kaowsar</Typography.Title>
        <Typography.Text italic>Software Engineer, PriyoSys Limited</Typography.Text>
        <Typography.Paragraph></Typography.Paragraph>
        <Typography.Paragraph>I am currently working as a Fullstack software engineer in PriyoSys Limited,
          focused on Fintech SaaS products.
        </Typography.Paragraph>
        <Typography.Paragraph>I like to indulge in analytical thinking and finding solutions of complex problems.
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