import React, { useState } from 'react'
import { Box, Typography, TextField } from "@mui/material"
import { white, dark, grey } from 'theme/colors'
import { PrimaryButton } from '../Button/Button'
import { AccountInput } from './AccountInput'

export const Login = ({ closeLogin, openSignUp }) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    const loginInfo = {
      email,
      password
    }
    console.log(loginInfo);
    setEmail('')
    setPassword('')
  }

  return (
    <Box
      onClick={() => closeLogin(false)}
      sx={{
        background: "rgba(23, 27, 36, 0.6)",
        position: 'fixed',
        width: "100%",
        height: '100%',
        zIndex: '100000',
        top: 0,
        left: 0,
        display: ' flex',
        justifyContent: 'center'
      }}
    >
      <Box
        onClick={(e) => e.stopPropagation()}
        sx={{
          position: 'absolute',
          top: '10%',
          backgroundColor: white,
          p: 6
        }}>
        <Typography
          sx={{
            fontSize: '34px',
            color: dark[600],
            textAlign: 'center',
            fontWeight: 600,
            mb: 3
          }}
        >Вход</Typography>
        <Box
          component='form'
          onSubmit={(e) => handleSubmit(e)}>
          <AccountInput
            type="email"
            placeholder='youname@email.com'
            boxWidth='100%'
            value={email}
            setState={setEmail}
            label="E-mail"
          />
          <AccountInput
            type="password"
            placeholder=''
            boxWidth='100%'
            value={password}
            setState={setPassword}
            label="Пароль"
          />
          <Typography
            sx={{
              color: grey[800],
              cursor: 'pointer',
              m: '12px 0 24px'
            }}
          >Забыли пароль?</Typography>
          <PrimaryButton type="submit" sx={{ width: '100%', mb: '12px' }}>Войти</PrimaryButton>
          <PrimaryButton onClick={() => {
            closeLogin(false)
            openSignUp(true)
          }} sx={{ width: '100%', backgroundColor: white, border: "1px solid #D1D1D3" }}>Создать учетную запись</PrimaryButton>
        </Box>
      </Box>
    </Box>
  )
}
