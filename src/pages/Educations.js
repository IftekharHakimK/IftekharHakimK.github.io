import { Col, Row, Timeline, Typography } from 'antd';

const Education = () => {
    return (
        <>
            <Timeline >
                <Timeline.Item >
                    <Typography.Title level={5}>B.Sc. in Computer Science and Engineering</Typography.Title >
                    <Typography level={5}>Bangladesh University of Engineering and Technology</Typography >
                    <Typography>March 2018 - May 2023</Typography>
                    <Typography.Text strong>CGPA: 3.95/4.00 (Top 5% in class)</Typography.Text>
                    <Typography>Been on dean’s list and received merit scholarships on every academic year. </Typography>
                    <Typography>Notable courses:</Typography>
                    <Row>
                        <Col sm={24} md={12} lg={8}>CSE405 - Computer Security</Col>
                        <Col sm={24} md={12} lg={8}>CSE305 - Computer Architecture</Col>
                        <Col sm={24} md={12} lg={8}>CSE313 - Operating Systems</Col>
                        <Col sm={24} md={12} lg={8}>CSE471 - Machine Learning</Col>
                        <Col sm={24} md={12} lg={8}>CSE309 - Compiler Design</Col>
                        <Col sm={24} md={12} lg={8}>CSE453 - High Performance Database Systems</Col>
                        <Col sm={24} md={12} lg={8}>CSE463 - Introduction to Bioinformatics</Col>
                        <Col sm={24} md={12} lg={8}>CSE411 - Simulation and Modeling</Col>
                        <Col sm={24} md={12} lg={8}>MATH245 - Statistics and Probability</Col>
                        <Col sm={24} md={12}>MATH247- Linear Algebra</Col>
                        
                    </Row>
                </Timeline.Item>
                <Timeline.Item >
                    <Typography.Title level={5}>Higher Secondary School Certificate (HSC)
                    </Typography.Title >
                    <Typography level={5}>Chittagong College</Typography >
                    <Typography> 2017</Typography>
                    <Typography.Text strong>GPA: 5.00/5.00 </Typography.Text>
                    <Typography>Received board talentpool scholarship.</Typography>
                </Timeline.Item>

                <Timeline.Item >
                    <Typography.Title level={5}>Secondary School Certificate (SSC)
                    </Typography.Title >
                    <Typography level={5}>Chittagong Collegiate School</Typography >
                    <Typography> 2015</Typography>
                    <Typography.Text strong>GPA: 5.00/5.00 </Typography.Text>
                    <Typography>Received board talentpool scholarship.</Typography>
                </Timeline.Item>

            </Timeline>
        </>
    );
}
export default Education;