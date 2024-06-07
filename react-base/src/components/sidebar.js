import React from 'react';
import { useState, useEffect } from 'react';
import { Layout, Menu, theme, Space, Image } from 'antd';
const { Header, Content, Footer, Sider } = Layout;



const Sidebar = ({ children }) => {
    const items = [
        {
            key: '1',
            label: 'Home',
            onClick: () => {window.location.href = '/'}
        },
        {
            key: '2',
            label: 'Education',
        },
        {
            key: '3',
            label: 'Experience',
        },
        {
            key: '4',
            label: 'Honours',
        },
        {
            key: '5',
            label: 'Projects',
        },
        {
            key: '6',
            label: 'Research',
        },
        {
            key: '7',
            label: 'Contact',
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
                <div style={{margin: '10px', marginTop: '20px'}}>
                    {children}
                </div>
                
            </Layout>
            :
            <div style={{backgroundColor: '#e6ebe7'}}>
                <div style={{width: '60%', backgroundColor: '#e6ebe7', paddingTop: '50px', marginLeft: '20%', marginRight: '20%'}}>
                    <Space direction="horizontal" style={{backgroundColor: 'white'}}>
                        <Menu theme="light" mode="horizontal" defaultSelectedKeys={['1']} items={items} style={{ width: '40vw' }} inlineIndent={2}/>
                        <Menu theme="light" mode="horizontal" items={icons} style={{ width: '20vw' }} />
                    </Space>
                    {children}
                </div>
            </div>


        }

    </>
}
export default Sidebar;