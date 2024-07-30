import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';

import {
  SECTION_ABOUT,
  SECTION_AGENDA,
  SECTION_GENESIS,
  SECTION_MEMBERS,
  SECTION_MERCHANDISE,
  SECTION_RESOURCES,
  SECTION_TEACHERS,
} from '../../constants/sections';
import Genesis from './sections/Genesis';
import Agenda from './sections/Agenda';
import Members from './sections/Members';
import Teachers from './sections/Teachers';
import Resources from './sections/Resources';
import Merchandise from './sections/Merchandise';
import About from './sections/About';
import Logo from './sections/Logo';

const getSection = (section) => {
  switch (section) {
    case SECTION_GENESIS:
      return <Genesis />;
    case SECTION_AGENDA:
      return <Agenda />;
    case SECTION_MEMBERS:
      return <Members />;
    case SECTION_TEACHERS:
      return <Teachers />;
    case SECTION_RESOURCES:
      return <Resources />;
    case SECTION_MERCHANDISE:
      return <Merchandise />;
    case SECTION_ABOUT:
      return <About />;
    default:
      return <Logo />;
  }
};

export default function ASTIDashboardBody(props) {
  const { section } = props;

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      {getSection(section)}
    </Box>
  );
}

ASTIDashboardBody.propTypes = {
  section: PropTypes.string.isRequired,
};
