import React from 'react'

import { CircularProgress } from '@mui/material'

import s from './AppSpinner.module.scss'

export const AppSpinner = () => {
  return (
    <div className={s.spinner}>
      <CircularProgress color="error" />
    </div>
  )
}
