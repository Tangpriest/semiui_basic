import { Button, Typography } from '@douyinfe/semi-ui'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const { Text } = Typography

export default function Login(){
  const navigate = useNavigate()

  const handleLogin = () => {
    // 这里添加你的登录逻辑
    // 如果登录成功，使用navigate函数跳转到主页
    navigate('/dashboard')
  }

  return (
    <div style={{
      backgroundColor: 'var(--semi-color-bg-1)',
      height         : '100vh',
      width          : '100vw',
    }}>
      <Text>Login</Text>
      <Button onClick={handleLogin}>登录</Button>
    </div>
  )
}