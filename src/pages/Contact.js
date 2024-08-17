import { Col, Typography, Row } from "antd"

const Contact = () => {
    return (
        <div>  
            <Row>
                <Col span={24}><Typography.Text strong>Email</Typography.Text><br/></Col>
                <Col span={24}><Typography.Text italic>iftekharhakimkaowsar88 AT gmail DOT com</Typography.Text></Col>
                <Col span={24}>
                <iframe 
                style={{width: '100%', maxWidth: '500px', height: '300px', marginTop: '50px'}}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.4860550187705!2d90.34561407618573!3d23.765700088187323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c19a1ff5142f%3A0xc2239d95c85f37cc!2sIftekhar%20Basha!5e0!3m2!1sen!2sbd!4v1718405256583!5m2!1sen!2sbd"></iframe>
            
                </Col>
                </Row>
            
        </div>
    )
}
export default Contact;