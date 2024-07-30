import { Box } from '@mui/material';
import React from 'react';
import ASTITitle from '../../labels/ASTITitle';
import ASTIText from '../../labels/ASTIText';

export default function Agenda() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      width="100%"
      gap={4}
    >
      <ASTITitle text="Agenda" />
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        width="80%"
        gap={2}
      >
        <ASTIText text="ASTIRoids Jam – Qfactory – 29th of July 2023" />
        <ASTIText text="ASTIRoids Jam – Qfactory – 5th of July 2023" />
        <ASTIText text="Show - Tag Out Theater – Mike’s Badhuistheater – 18th of August 2023" />
        <ASTIText text="Show – Easylaughs – CREA – 31st of August 2023" />
        <ASTIText text="Show – Boom Chicago Comedy Festival – Boom Chicago – 15th of September 2023" />
      </Box>
    </Box>
  );
}
