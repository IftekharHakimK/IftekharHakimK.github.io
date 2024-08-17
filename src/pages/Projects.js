import { Row, Col, Typography, Image } from 'antd';
import { Link } from 'react-router-dom';
import {
    YoutubeFilled
} from '@ant-design/icons';

const Project = () => {
    return (
        <>
            <Row gutter={[64, 64]}>
                <Col md={8}>

                    {/* <iframe width="100%" height="215" src="https://www.youtube.com/embed/h7b0vDJqepY?si=ZiBMmk4rxWNFpCJr"
                        title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
                        gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
                    </iframe> */}
                    <div style={{ display: 'flex' }}>
                        <Typography style={{ fontSize: '18px', fontWeight: 'bold' }}>
                            Shaako
                        </Typography>
                        &emsp;
                        <Link to="https://github.com/IftekharHakimK/Shaako" target="_blank" rel="noopener noreferrer">
                            <Image src="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/github-512.png" height="25px" width="25px" preview={false} />
                        </Link>
                        &emsp;
                        <Link to="https://www.youtube.com/watch?v=h7b0vDJqepY" target="_blank" rel="noopener noreferrer">
                            <YoutubeFilled style={{ fontSize: '25px' }} />
                        </Link>

                    </div>

                    <Typography.Text>
                        A project for the ease and efficiency of community health working system in Bangladeshi rural areas. It has
                        functionalities and analytics for organization managers, health workers and patients.
                    </Typography.Text> <br />
                    <Typography.Text italic>
                        Stack: React, React-native, Django
                        REST framework, Postgres
                    </Typography.Text><br />
                </Col>

                <Col md={8}>
                    <div style={{ display: 'flex' }}>
                        <Typography style={{ fontSize: '18px', fontWeight: 'bold' }}>
                            C Compiler
                        </Typography>
                        &emsp;
                        <Link to="https://github.com/IftekharHakimK/CSE-310-Compiler-Sessional" target="_blank" rel="noopener noreferrer">
                            <Image src="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/github-512.png" height="25px" width="25px" preview={false} />
                        </Link>
                    </div>
                    <Typography.Text>
                        A compiler from scratch that can handle a subtle portion of C codes &mdash; with some modern optimizations! It includes
                        Lexical Analysis of codes (Lexer), Syntax and Semantic Analysis, 
                        Intermediate Code Generation, Optimization on Assembly code and execution on x8086!
                    </Typography.Text> <br />
                    <Typography.Text italic>
                        Tools: Flex, Bison.
                    </Typography.Text>
                </Col>

                <Col md={8}>
                    <div style={{ display: 'flex' }}>
                        <Typography style={{ fontSize: '18px', fontWeight: 'bold' }}>
                            Computer Graphics: Ray Tracing
                        </Typography>
                        &emsp;
                        <Link to="https://github.com/IftekharHakimK/CSE410/tree/main/Offline3/RayTracing" target="_blank" rel="noopener noreferrer">
                            <Image src="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/github-512.png" height="25px" width="25px" preview={false} />
                        </Link>
                    </div>
                    <Typography.Text>
                        Describe objects, environment, light mathematically; view the reality in display with proper lighting, shading and reflection.
                    </Typography.Text> <br />
                </Col>

                <Col md={8}>
                    <div style={{ display: 'flex' }}>
                        <Typography style={{ fontSize: '18px', fontWeight: 'bold' }}>
                            Convolutional Neural Network
                        </Typography>
                        &emsp;
                        <Link to="https://github.com/IftekharHakimK/CSE-472-Offlines/tree/main/Offline4/1705045/1705045" target="_blank" rel="noopener noreferrer">
                            <Image src="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/github-512.png" height="25px" width="25px" preview={false} />
                        </Link>
                    </div>
                    <Typography.Text>
                        Implementation of CNN from scratch in python using numpy on LeNet architecture for training
                        and testing on Bangali image to digit detection.
                    </Typography.Text> <br />
                </Col>

                <Col md={8}>
                    <div style={{ display: 'flex' }}>
                        <Typography style={{ fontSize: '18px', fontWeight: 'bold' }}>
                            RRED on Network Simulator 3 (NS3)
                        </Typography>
                        &emsp;
                        <Link to="https://github.com/IftekharHakimK/NS3_Project" target="_blank" rel="noopener noreferrer">
                            <Image src="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/github-512.png" height="25px" width="25px" preview={false} />
                        </Link>
                    </div>
                    <Typography.Text>
                        Implementing robust RED algorithm on NS3 that can eliminate LDOS attack in networks to achieve 90% better throughput.
                    </Typography.Text> <br />
                </Col>

                <Col md={8}>
                    {/* <iframe width="100%" height="215" src="https://www.youtube.com/embed/FCcRqSm7u5w?si=rGvJWR0i3Xdu2Wj0"
                        title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
                    <div style={{ display: 'flex' }}>
                        <Typography style={{ fontSize: '18px', fontWeight: 'bold' }}>
                            ESPNcricinfo
                        </Typography>
                        &emsp;
                        <Link to="https://github.com/IftekharHakimK/ESPNcricinfo" target="_blank" rel="noopener noreferrer">
                            <Image src="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/github-512.png" height="25px" width="25px" preview={false} />
                        </Link>
                        &emsp;
                        <Link to="https://www.youtube.com/embed/FCcRqSm7u5w?si=rGvJWR0i3Xdu2Wj0" target="_blank" rel="noopener noreferrer">
                            <YoutubeFilled style={{ fontSize: '25px' }} />
                        </Link>
                    </div>
                    <Typography.Text>
                        Database focused project &mdash; web app for cricket updates.
                    </Typography.Text> <br />
                    <Typography.Text italic>
                        Stack: Django fullstack, Oracle
                    </Typography.Text>
                </Col>

                <Col md={8}>
                    {/* <Image src="https://github.com/IftekharHakimK/Algorithm-Simulator/blob/main/out/production/alogsim/sample/back.jpeg?raw=true" width="100%" height="215px"/> */}
                    <div style={{ display: 'flex' }}>
                        <Typography style={{ fontSize: '18px', fontWeight: 'bold' }}>
                            Algorithm-Simulator
                        </Typography>
                        &emsp;
                        <Link to="https://github.com/IftekharHakimK/Algorithm-Simulator/tree/main" target="_blank" rel="noopener noreferrer">
                            <Image src="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/github-512.png" height="25px" width="25px" preview={false} />
                        </Link>
                    </div>
                    <Typography.Text>
                        Interactive simulation of different algorithms based on user input.
                    </Typography.Text> <br />
                    <Typography.Text italic>
                        Stack: Java, JavaFX.
                    </Typography.Text>
                </Col>

                <Col md={8}>
                    <div style={{ display: 'flex' }}>
                        <Typography style={{ fontSize: '18px', fontWeight: 'bold' }}>
                            Super Resolution of Images
                        </Typography>
                        &emsp;
                        <Link to="https://github.com/maisharahman876/Super-Resolution-of-Images" target="_blank" rel="noopener noreferrer">
                            <Image src="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/github-512.png" height="25px" width="25px" preview={false} />
                        </Link>
                    </div>
                    <Typography.Text>
                        Viewing images in superior resolutions!
                    </Typography.Text> <br />
                </Col>

                <Col md={8}>
                    <div style={{ display: 'flex' }}>
                        <Typography style={{ fontSize: '18px', fontWeight: 'bold' }}>
                            End to End Testing
                        </Typography>
                        &emsp;
                        <Link to="https://github.com/IftekharHakimK/AI-Testing-307/tree/main" target="_blank" rel="noopener noreferrer">
                            <Image src="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/github-512.png" height="25px" width="25px" preview={false} />
                        </Link>
                    </div>
                    <Typography.Text>
                        An E2E testing project on <a href="https://www.goodreads.com/">goodreads</a> using Cucumber and Chrome Driver.
                    </Typography.Text> <br />
                </Col>
            </Row>
        </>
    )
}

export default Project;