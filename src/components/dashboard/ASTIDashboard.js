import React, { useState } from 'react';
import { Box } from '@mui/material';

import ASTINavBar from '../navbar/ASTINavbar';
import ASTIHeader from '../labels/ASTIHeader';
import ASTIDashboardBody from './ASTIDashboardBody';
import AstiroidsLogo from '../../assets/images/astiroids_logo.png';

export default function ASTIDashboard() {
  const [section, setSection] = useState('default');

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      width="100%"
    >
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        py={4}
        width="100%"
        position="fixed"
        top={0}
        sx={{ backgroundColor: 'black', borderBottom: '1px solid gray' }} // TODO boxShadow?
      >
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
          gap={1}
        >
          <img src={AstiroidsLogo} alt="astiroids_logo" width="5%" />
          <ASTIHeader text="ASTIRoids" />
        </Box>
        <ASTINavBar section={section} setSection={setSection} />
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        pt={38}
        pb={8}
      >
        <ASTIDashboardBody section={section} />
      </Box>
    </Box>
  );
}
