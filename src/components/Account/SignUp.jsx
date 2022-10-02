import React, { useState } from 'react'
import { Box, Typography } from "@mui/material"
import { white, dark } from 'theme/colors'
import { PrimaryButton } from '../Button/Button'
import { AccountInput } from './AccountInput'

export const SignUp = ({ closeSignUp }) => {

  const [isValidData, setIsValidData] = useState(true)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [name, setName] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (password.length < 6 && password !== confirmPassword) {
      setIsValidData(false)
      return
    }
    const signUpInfo = {
      email,
      password,
      displayName: name
    }

    console.log(signUpInfo);
    setEmail('')
    setPassword('')
    setName('')
  }

  return (
    <Box
      onClick={() => closeSignUp(false)}
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
          minWidth: '528px',
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
        >Регистрация</Typography>
        <Box
          component='form'
          onSubmit={(e) => handleSubmit(e)}>
          {!isValidData && <Typography sx={{ color: 'red', fontSize: '20px', fotnWeight: 600, mb: 2 }}>
            Пароль не корректный или не подтвержден
          </Typography>}
          <Box sx={{ display: 'flex', width: '100%', gap: 2 }}>
            <AccountInput
              inputType="text"
              placeholder='Богдан'
              boxWidth='50%'
              value={name}
              setState={setName}
              label="Имя"
            />
            <AccountInput
              inputType="email"
              placeholder='youname@gmail.com'
              boxWidth='50%'
              value={email}
              setState={setEmail}
              label="E-mail"
            />
          </Box>
          <Box sx={{ display: 'flex', width: '100%', gap: 2 }}>
            <AccountInput
              inputType="password"
              placeholder=''
              boxWidth='50%'
              value={password}
              setState={setPassword}
              label="Пароль"
            />
            <AccountInput
              inputType="password"
              placeholder=''
              boxWidth='50%'
              value={confirmPassword}
              setState={setConfirmPassword}
              label="Прдтвердите пароль"
            />
          </Box>
          <PrimaryButton type="submit" sx={{ width: '100%', mt: '12px' }}>Зарегистрироваться</PrimaryButton>
        </Box>
      </Box>
    </Box>
  )
}
