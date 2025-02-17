import { Typography } from '@douyinfe/semi-ui';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import LoginPannel from '../../components/specific/loginPannel/LoginPannel';
import styles from './LoginPage.module.css';




const { Text } = Typography

export default function Login() {
  const navigate = useNavigate()

  const { t, i18n } = useTranslation()

  const handleLogin = () => {
    // 这里添加你的登录逻辑
    // 如果登录成功，使用navigate函数跳转到主页
    navigate('/dashboard')
  }

  const language = {
    Lanuage_Login: t('page_login.button_login'),
  }

  return (
    <div className={styles.container}>
      <div className={styles.mask}>

        <img src="/assets/login-logo.svg" alt="logo"/>
        <LoginPannel />
        {/* <Button size='large' icon={<IconLanguage size='large' />} onClick={() => setUserLanguagePreference()}>{i18n.language}</Button>
        <Button onClick={handleLogin}>{language.Lanuage_Login}</Button> */}
      </div>
    </div>
  )
}