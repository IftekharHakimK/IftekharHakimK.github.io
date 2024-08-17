import { List, Typography } from "antd";
import {
    TeamOutlined, PicRightOutlined, AimOutlined
} from '@ant-design/icons';
const Research = () => {
    return (
        <>
            <ul>
                <li>
                    <Typography.Text strong>A New Approach to Parameterized String Matching
                        with Fixed Mismatch Tolerance (2022-2023)</Typography.Text>
                    <br /><br />
                    <Typography.Text italic style={{ fontSize: '12px' }}>
                        <PicRightOutlined /> &nbsp;
                        Undergraduate thesis work,
                        paper in submission
                        <br />
                        <TeamOutlined /> &nbsp; Co-authors: Apurba Saha, Mahdi Hasnat Siyam, Dr. M. Sohel Rahman (Supervisor)
                        <br />
                        <AimOutlined /> &nbsp;
                        String matching, Data structure, FFT</Typography.Text>
                    <br /><br />
                    <Typography.Paragraph style={{ fontSize: '12px' }}>In this work, we drew an efficient solution to find matching locations between parameterized text and pattern with fixed mismatch
                        tolerance. Two solutions have been introduced – one for unit tolerance value, one for the generic case. For the first one, we
                        solved it by using Segment Tree data structure, hashing and some insightful observations for transformation of string. For
                        the later, we improved previously known matching solution by incorporating Fast Fourier Transform (FFT). Our solution
                        is also parallelizable on multi-core machine and does not depend on value of tolerance.</Typography.Paragraph>
                </li>

                <li>
                    <Typography.Text strong>Quantum Cryptography</Typography.Text>
                    <br /><br />
                    <Typography.Text italic style={{ fontSize: '12px' }}>
                        <PicRightOutlined /> &nbsp;
                        Running work
                        <br />
                        <TeamOutlined /> &nbsp; Collaborator: Maisha Rahman Mim
                        <br />
                        <AimOutlined /> &nbsp;
                        Cryptography, Quantum Computing</Typography.Text>
                    <br /><br />
                    <Typography.Paragraph style={{ fontSize: '12px' }}>
                        We aim to enhance Quantum Key Distribution (QKD) algorithms. We 
                        are optimistic for a fruitful outcome.
                    </Typography.Paragraph>
                </li>
            </ul >
        </>
    )
}

export default Research;