import { List, Timeline, Typography } from "antd";
import { Link } from "react-router-dom";
const Experience = () => {
    return (
        <>
            <Timeline>
                <Timeline.Item>
                    <Typography.Title level={5}>PriyoSys Ltd.</Typography.Title >
                    <Typography.Text italic>Software Engineer (June 2023 - Present)</Typography.Text>
                    <Typography>
                        Working massively on  
                        <Link to="https://pay.priyo.com/" target="_blank" rel="noopener noreferrer"> Priyo Pay </Link>
                        a fast growing Fintech startup that offers US bank account, BDT wallet and Mastercard usable to pay and 
                        transfer money between US and Bangladesh. This SaaS product has a large
                        user-base in US and Bangladesh with a high volume of daily transaction. 
                        {/* I have written ∼20% of the full codebase 
                        and reviewed/indirectly contributed to more than ~50%. */}
                        Stack includes Django, NextJS, ReactJS, Postgres, Mongo, Docker, Jenkins, Redis, Google Cloud Platform (GCP). 
                        <ul>
                            <li>
                            Designing system and implementing core features like different type of transactions, fee handling, system-external
                            payments (card), referral system, KYC process, administration, building analytics, system optimization 
                            etc. in both Backend and Frontend with an agile development team.
                            </li>
                            <li>
                            Led on designing and implementing a microservice that backs the full BDT wallet, USD to BDT conversion and
                            withdrawal to local banks in Bangladesh. This includes building account ledgers, real time conversions, asynchronous
                            transfers, batch payments, regular settlements, reconciliation, internal head account management etc. 
                            This also includes a banking
                            gateway where local banks can push funds to the wallet, upon proper authentication.
                            </li>
                            <li>
                            Designing and implementing many third-party API integrations, such as KYC providers, National ID server, multiple
                            Banking as a Service (BaaS) platforms etc.
                            </li>
                            <li>
                            Notably migrating high-write low-read data to NoSQL to achieve ~75% faster feature and 50% lesser memory usage.
                            </li>
                            <li>
                            Regularly contributing on deployment and system architecture management &mdash; building staging servers, 
                            writing pipelines for CI-CD, internal networking, firewall management, containeriztion &mdash;
                            in a cost effective manner, mostly in Google Cloud Platform (GCP).
                            </li>
                        </ul>
                    </Typography>
                </Timeline.Item>
            </Timeline>
        </>
    )
}
export default Experience;