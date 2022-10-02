import React, { useState } from 'react'
import {
  Box,
  Container,
  Typography,
} from "@mui/material"
import { dark } from 'theme/colors'
import { AccountInput } from '../../components/Account/AccountInput'
import { PrimaryButton } from '../../components/Button/Button'

export const PersonalArea = () => {
  // dont forgot to block this page in app if user hasn't been authorized
  const user = {
    displayName: 'oskar',
    secondName: 'shtefan',
    email: 'oskar@gmail.com',
    password: 'oskar2006'
  }
  const [newName, setNewName] = useState(user.displayName)
  const [newSecondName, setNewSecondName] = useState(user.secondName)
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [email, setEmail] = useState(user.email)
  const [number, setNumber] = useState('0551')
  const [birthDate, setBirthDate] = useState('')

  const [isValidData, setValidData] = useState(true)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('test');
    if (newPassword.length >= 6 && newPassword !== confirmPassword) {
      setValidData(true)
      return
    }
    setValidData(false)

    const newUser = {
      ...user,
      displayName: newName,
      secondName: newSecondName,
      password: newPassword,
      email: email,
      number: number,
      birthDate: birthDate
    }
    console.log(newUser);
  }


  return (
    <Container sx={{ maxWidth: '768px !important' }}>
      <Typography sx={{
        fontSize: '48px',
        fontWeight: 700,
        color: dark[500],
        mb: 5
      }}>Личный кабинет</Typography>
      <Box component='form' onSubmit={(e) => handleSubmit(e)} sx={{
        p: 4.5,
        border: '1px solid #D1D1D3'
      }}>
        <Typography sx={{
          fontSize: '34px',
          fontWeight: 600,
          color: dark[600],
          mb: 3
        }}>
          Личная информация</Typography>
        <Box sx={{ display: 'flex', width: '100%', gap: 2 }}>
          <AccountInput
            inputType="text"
            placeholder='Имя'
            boxWidth='50%'
            value={newName}
            setState={setNewName}
            label="Имя"
          />
          <AccountInput
            inputType="text"
            placeholder='Фамилия'
            value={newSecondName}
            setState={setNewSecondName}
            boxWidth='50%'
            label="Фамилия"
          />
        </Box>
        <Box sx={{ display: 'flex', width: '100%', gap: 2 }}>
          <AccountInput
            inputType="date"
            placeholder='Дата рождения'
            value={birthDate}
            setState={setBirthDate}
            boxWidth='50%'
            label="Имя"
          />
          <AccountInput
            inputType="number"
            placeholder='Номер'
            value={number}
            setState={setNumber}
            boxWidth='50%'
            label="Телефон"
          />
        </Box>
        <AccountInput
          inputType="email"
          placeholder='email'
          value={email}
          setState={setEmail}
          boxWidth='100%'
          label="E-mail"
        />
        {!isValidData && <Typography sx={{ color: 'red', fontSize: '20px', fotnWeight: 600, mb: 2 }}>
          Пароль не корректный или не подтвержден
        </Typography>}
        <Box sx={{ display: 'flex', width: '100%', gap: 2 }}>
          <AccountInput
            inputType="password"
            placeholder='пароль'
            value={newPassword}
            setState={setNewPassword}
            boxWidth='50%'
            label="Пароль"
          />
          <AccountInput
            inputType="password"
            placeholder='пароль'
            value={confirmPassword}
            setState={setConfirmPassword}
            boxWidth='50%'
            label="Подтверждение пароля"
          />
        </Box>
        <PrimaryButton type='submit'>Сохранить</PrimaryButton>
      </Box>
    </Container>
  )
}
