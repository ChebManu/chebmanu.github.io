import React from 'react';

import AstiroidsLogo from '../../../assets/images/astiroids_logo.png';
import { Box } from '@mui/material';

export default function Logo() {
  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
      height={{ xs: '50vh', sm: '80vh' }}
      pt={{xs: 60, sm: 0}}
    >
      <img src={AstiroidsLogo} alt="astiroids_logo" height="100%" />;
    </Box>
  );
}
