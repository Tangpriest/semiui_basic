import { IconLanguage } from '@douyinfe/semi-icons';
import { IconDarkMode } from '@douyinfe/semi-icons-lab';
import { Avatar, Col, Layout, Row, Space } from '@douyinfe/semi-ui';
import Text from '@douyinfe/semi-ui/lib/es/typography/text';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { setUserLanguagePreference } from '../../i18n';
import Logo from './Logo';

const CustomHeader = () => {

  const { t, i18n } = useTranslation();

  console.log(t)
  const { Header } = Layout;
  const commonStyle = {
    height: 64,
    lineHeight: '64px',
    background: 'var(--semi-color-bg-1)',
    borderBottom: '1px solid var(--semi-color-border)',

  };


  const switchMode = () => {
    const body = document.body;
    if (body.hasAttribute('theme-mode')) {
      body.removeAttribute('theme-mode');
      // 以下这行代码，window.setMode仅用于当通过本Demo切换时，通知Semi官网Header记录更新当前模式（只用于演示）。在您的代码里无需存在。
    } else {
      body.setAttribute('theme-mode', 'dark');
    }
  };

  const quit = () => {
    //通过react-router  跳转到login 
    window.location.href = '/login';



  }

  return (
    <Header style={commonStyle}>
      <Row>
        <Col span={12} style={{
          paddingLeft: 20,
          color: 'var(--semi-color-text-1)',
          display: 'flex',
          alignItems: 'center',
          height: '64px',
        }}>
          <Space size={10}>
            <Logo />
            <Text style={{ fontSize: 18, fontWeight: 600 }}>{t('company')}</Text>
          </Space>
        </Col>
        <Col span={12} style={{
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
          height: '64px',
          paddingRight: 20,
        }}>
          <Space size={20}>
            <IconLanguage color='var(--semi-color-text-1)' size='extra-large' onClick={() => {
              setUserLanguagePreference()
            }} />
            <Text>{i18n.language}</Text>
            {/* <Dropdown
                position = {'bottomLeft'}
                render   = {
                    <Dropdown.Menu>
                        <Dropdown.Item>威奢煤矿</Dropdown.Item>
                        <Dropdown.Item>杨家寨煤矿</Dropdown.Item>
                        <Dropdown.Item>拉苏煤矿</Dropdown.Item>
                    </Dropdown.Menu>
                }
            >
                <Tag>威奢煤矿</Tag>
          </Dropdown> */}
            <IconDarkMode
              size='extra-large'
              onClick={switchMode} style={{ cursor: 'pointer' }} />

            <Avatar color="light-blue" size="small" alt='Taylor Joy'>
              TJ
            </Avatar>
            <Text onClick={quit}>Taylor Joy</Text>
          </Space>
        </Col>
      </Row>
    </Header>
  );
}

export default CustomHeader;