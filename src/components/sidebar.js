import React from 'react';
import { useState, useEffect } from 'react';
import { Layout, Menu, theme, Space, Image, ConfigProvider } from 'antd';
import { Link } from 'react-router-dom';
const { Header, Content, Footer, Sider } = Layout;



const Sidebar = ({ children }) => {
    const items = [
        {
            key: '1',
            label: <Link to="/">Home</Link>,
        },
        {
            key: '2',
            label: <Link to="/education">Education</Link>,
        },
        {
            key: '3',
            label: <Link to="/experience">Experience</Link>,
            
        },
        {
            key: '4',
            label: <Link to="/honours">Honours</Link>,
        },
        {
            key: '5',
            label: <Link to='/projects'>Projects</Link>,
        },
        {
            key: '6',
            label: <Link to='/research'>Research</Link>,
        },
        {
            key: '7',
            label: <Link to='/contact'>Contact</Link>,
        },
    ]

    const icons = [
        {
            key: '1',
            icon: <Image src="https://cdn.iconscout.com/icon/free/png-512/free-code-forces-3521352-2944796.png?f=webp&w=256" height="20px" width="20px" preview={false} />,
            onClick: () => { window.open('https://codeforces.com/profile/Iftekhar_Hakim_K', '_blank', 'noopener,noreferrer'); }
        },
        {
            key: '2',
            icon: <Image src="https://cdn.iconscout.com/icon/premium/png-512-thumb/linkedin-2752135-2284952.png?f=webp&w=256" height="20px" width="20px" preview={false} />,
            onClick: () => { window.open('https://www.linkedin.com/in/iftekharhakimk/', '_blank', 'noopener,noreferrer'); }
        },
        {
            key: '3',
            icon: <Image src="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/github-512.png" height="20px" width="20px" preview={false} />,
            onClick: () => { window.open('https://github.com/IftekharHakimK', '_blank', 'noopener,noreferrer'); }
        },
        {
            key: '4',
            icon: <Image src="https://icpc.kattis.com/images/site-logo?v=19f2a52435758d28775afd093543644c" height="20px" width="20px" preview={false} />,
            onClick: () => { window.open('https://icpc.global/ICPCID/NU59MNSTICCQ', '_blank', 'noopener,noreferrer'); }
        },
    ]
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 576);
    const handleResize = () => {
        setIsMobile(window.innerWidth <= 576);
    };
    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return <>
        {isMobile ?
            <Layout>
                <Sider
                    breakpoint="sm"
                    collapsedWidth="0"
                >
                    <Menu theme="light" mode="inline" defaultSelectedKey={['1']} items={items} />
                </Sider>
                <div style={{ margin: '10px', marginTop: '20px' }}>
                    {children}
                </div>

            </Layout>
            :
            <div style={{ backgroundColor: '#e6ebe7', paddingTop: '50px', paddingBottom: '50px', minHeight: '100vh' }}>
                <div style={{ backgroundColor: '#FFFFFF', marginLeft: '10%', marginRight: '10%' }}>
                    <Space.Compact direction="horizontal" style={{ backgroundColor: 'white', width: '100%', display: 'flex', justifyContent: 'space-evenly' }}>
                        <div style={{ width: '70vw' }}>
                            <Menu theme="light" mode="horizontal" items={items} inlineIndent={2} />
                        </div>
                        <div style={{ width: '30vw' }}>
                            <Menu theme="light" mode="horizontal" items={icons} />
                        </div>


                    </Space.Compact>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingLeft: '5%', paddingRight: '5%', paddingTop: '15px' }}>
                        {children}
                    </div>
                </div>
            </div>


        }

    </>
}
export default Sidebar;