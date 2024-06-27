import { IconLanguage } from '@douyinfe/semi-icons';
import { Button, Typography } from '@douyinfe/semi-ui';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { setUserLanguagePreference } from '../../i18n';
import styles from './LoginPage.module.css';




const { Text } = Typography

export default function Login(){
  const navigate = useNavigate()

  const { t ,i18n} = useTranslation()

  const handleLogin = () => {
    // 这里添加你的登录逻辑
    // 如果登录成功，使用navigate函数跳转到主页
    navigate('/dashboard')
  }

  return (
    <div className = {styles.container}>
      
      <Button size='large' icon={<IconLanguage size='large'/>} onClick = {() => setUserLanguagePreference()}>{i18n.language}</Button>
      <Button onClick = {handleLogin}>{t('welcome')}</Button>
    </div>
  )
}