import { Box } from '@mui/material';
import React from 'react';
import ASTITitle from '../../labels/ASTITitle';
import ASTIText from '../../labels/ASTIText';

export default function Teachers() {
  return (
    <Box
    display="flex"
    flexDirection="column"
    justifyContent="center"
    alignItems="center"
    width="100%"
    gap={4}>
      <ASTITitle text="Teachers" />
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        width="100%"
        gap={2}
      >
        <ASTIText text="Marco Meurs from Easylaughs" />
        <ASTIText text="Raquel Palmas from NorthCoast and Boom Chicago" />
        <ASTIText text="Douglas Widick from NorthCoast" />
        <ASTIText text="Rob AndristPlourde from Boom Chicago" />
        <ASTIText text="Ryan Millar from Boom Chicago" />
        <ASTIText text="Lee James Alabaster Apsey" />
        <ASTIText text="Larry Dorsey" />
      </Box>
    </Box>
  );
}
