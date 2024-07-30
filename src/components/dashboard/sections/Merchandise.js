import { Box } from '@mui/material';
import React from 'react';
import ASTITitle from '../../labels/ASTITitle';
import ASTIText from '../../labels/ASTIText';
import Hoodie from '../../../assets/images/hoodie.jpeg';


export default function Merchandise() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      width="100%"
      gap={4}
    >
      <ASTITitle text="Merchandise" />
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        width="100%"
        gap={2}
      >
        <ASTIText text="Hoodies" />
        <img src={Hoodie} alt="astiroids_hoodie" width="40%" />
      </Box>
    </Box>
  );
}
