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
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '5px' }}>

    </div>
    <Row>
      <Col sm={24} md={1}></Col>
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
        <Typography.Paragraph>I like to indulge in analytical thinking and finding solutions of complex problems.
          I am interested in research on security,
          cryptography and theoretical computer science. Hence I am looking for relevant Ph.D. positions and would love to contribute
          from the start.</Typography.Paragraph>
      </Col>
    </Row>
  </>
}