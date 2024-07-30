import { Box } from '@mui/material';
import React from 'react';
import ASTITitle from '../../labels/ASTITitle';
import ASTIText from '../../labels/ASTIText';

export default function Members() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      width="100%"
      gap={4}
    >
      <ASTITitle text="Members" />
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        width="100%"
        gap={2}
      >
        <ASTIText text="Manuel Sans a.k.a. ChebManu" />
        <ASTIText text="Ollie Mason a.k.a. RaviOllie" />
        <ASTIText text="Mash Muravina a.k.a. DrMishMash" />
        <ASTIText text="Sue Narantsoa a.k.a. SueLaLoose" />
        <ASTIText text="Marco Meurs a.k.a. QMarCode" />
        <ASTIText text="Thomas de Boer a.k.a Wazoowaz" />
      </Box>
    </Box>
  );
}
