// src/Layout/Layout.js
import { Layout, Typography } from '@douyinfe/semi-ui';
import React from 'react';
import { Outlet } from 'react-router-dom';
import CustomHeader from './Components/Header';
import Navigation from './Components/Navigation';

const { Text } = Typography;

const LayoutPage = () => {
    const onbreakpoint = (screen, bool) => {
        console.log(screen, bool);
    };
    const commonStyle = {
        height: 64,
        lineHeight: '64px',
        background: 'var(--semi-color-bg-1)',
    };
    const { Footer, Sider, Content } = Layout;
    return (
        <Layout className="components-layout-demo">
            <CustomHeader />
            <Layout>
                <Sider
                    style={{
                        background: 'var(--semi-color-bg-1)',
                        // borderRight: '1px solid var(--semi-color-border)',
                    }}
                    breakpoint={['md']}
                    onBreakpoint={onbreakpoint}
                >
                    <Navigation />
                </Sider>
                <Content style={{
                    height: `calc(100vh - 64px)`,
                    backgroundColor: 'var(--semi-color-bg-0)',
                    lineHeight: '300px'
                }}>
                    <Outlet />
                </Content>
            </Layout>
            {/* <Footer style={{
                ...commonStyle,
                borderTop: '1px solid var(--semi-color-border)',
                textAlign: 'center',
            }}>
              <Text type = 'secondary'>盛泰荣矿业有限公司 CopyRight © 2024</Text>
            </Footer> */}
        </Layout>
    );
};

export default LayoutPage;
