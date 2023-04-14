import React from 'react'

import { AppBar, Toolbar } from '@mui/material'

import s from './AppHeader.module.scss'

export const AppHeader = () => {
  return (
    <header>
      <AppBar position="fixed">
        <Toolbar className={s.header}>{/* content */}</Toolbar>
      </AppBar>
      <Toolbar />
    </header>
  )
}
