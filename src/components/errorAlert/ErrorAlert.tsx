import React from 'react'

import { Alert, AlertTitle } from '@mui/material'

export const ErrorAlert = () => {
  return (
    <Alert severity="error">
      <AlertTitle>Error</AlertTitle>
      This is an error alert — <strong>check it out!</strong>
    </Alert>
  )
}
