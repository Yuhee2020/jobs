import React from 'react'

import './App.scss'
import { Container } from '@mui/material'

import { AppHeader } from './components/header/AppHeader'
import Jobs from './pages/jobs/Jobs'

export const App = () => {
  return (
    <>
      <AppHeader />
      <Container>
        <Jobs />
      </Container>
    </>
  )
}
