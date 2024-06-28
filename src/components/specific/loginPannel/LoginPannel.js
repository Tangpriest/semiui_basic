import { Button, Form, Typography } from '@douyinfe/semi-ui';
import Text from '@douyinfe/semi-ui/lib/es/typography/text';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import styles from './LoginPannel.module.css';

const { Title } = Typography;

export default function LoginPannel() {
  const { t } = useTranslation()
  const navigate = useNavigate()

  const CustomButtonStyle  = {
    width          : 300,
    height         : 45,
    marginTop      : 40,
    backgroundColor: '#C74321',
    fontSize       : 16,
    color          : '#FFF'
  }

  const CustomInputStyle = {  
    width     : 300,
    height    : 45,
    display   : 'flex',
    alignItems: 'center'
  }


  const navigateToDashboard = () => {
    console.log('Navigate to dashboard')
    navigate('/dashboard') 
  }

  return (
    <div className={styles.container}>
      <img src="/assets/logo.svg" alt="logo" style={{ width: 38, marginBottom: 25 }} />
      <Title heading={3} style={{ margin: '8px 0' }} >{t('component_login_pannel.text_system_name')}</Title>
      <Text style={{ opacity: 0.6, fontSize: 16 }}>{t('component_login_pannel.text_system_company')}</Text>
      <Form layout='vertical' onValueChange={values => console.log(values)} style={{ marginTop: 40 }}>
        <Form.Input field='UserName' label={t('component_login_pannel.input_username')}  style={CustomInputStyle} placeholder={t('component_login_pannel.input_username_placeholder')}  />
        <Form.Input field='Password' label={t('component_login_pannel.input_password')}  style={CustomInputStyle} placeholder={t('component_login_pannel.input_password_placeholder')} mode='password'/>
        <Button style={CustomButtonStyle} onClick={navigateToDashboard}>{t('component_login_pannel.button_login')}</Button>
      </Form>
    </div>
  )

}