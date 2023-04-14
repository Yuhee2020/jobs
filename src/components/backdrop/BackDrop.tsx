import React from 'react';

import { Backdrop, CircularProgress } from '@mui/material';
import './BackDrop.scss';

type PropsType = {
  loading: boolean;
};

export const BackDrop = ({ loading }: PropsType) => {
  return (
    <Backdrop  open={loading}>
      <CircularProgress color="error" />
    </Backdrop>
  );
};
