import { Box } from '@mui/material';
import React from 'react';
import ASTITitle from '../../labels/ASTITitle';
import ASTIText from '../../labels/ASTIText';

export default function NotFound() {
  return (
    <>
      <ASTITitle text="404 Not Found" />
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        width="80%"
        gap={2}
      >
        <ASTIText text="Oops! Something went wrong!" />
      </Box>
    </>
  );
}
