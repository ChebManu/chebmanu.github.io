import { Box } from '@mui/material';
import React from 'react';
import ASTITitle from '../../labels/ASTITitle';
import ASTIText from '../../labels/ASTIText';

export default function About() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      width="100%"
      gap={4}
    >
      <ASTITitle text="About" />
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        width="100%"
        gap={2}
      >
        <ASTIText text="TBD" />
      </Box>
    </Box>
  );
}
