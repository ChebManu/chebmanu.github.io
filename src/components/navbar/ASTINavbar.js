import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';

import ASTIButton from '../buttons/ASTIButton';
import {
  SECTION_ABOUT,
  SECTION_AGENDA,
  SECTION_GENESIS,
  SECTION_MEMBERS,
  SECTION_MERCHANDISE,
  SECTION_RESOURCES,
  SECTION_TEACHERS,
} from '../../constants/sections';

export default function ASTINavBar(props) {
  const { section, setSection } = props;

  const changeSection = (id) => {
    setSection(id);
  };

  return (
    <Box
      display="flex"
      flexDirection={{ xs: 'column', sm: 'row' }}
      justifyContent="center"
      alignItems="center"
      overflow="scroll"
      width="100%"
    >
      <ASTIButton
        text="Genesis"
        onClick={() => changeSection(SECTION_GENESIS)}
        selected={section === SECTION_GENESIS}
      />
      <ASTIButton
        text="Agenda"
        onClick={() => changeSection(SECTION_AGENDA)}
        selected={section === SECTION_AGENDA}
      />
      <ASTIButton
        text="Members"
        onClick={() => changeSection(SECTION_MEMBERS)}
        selected={section === SECTION_MEMBERS}
      />
      <ASTIButton
        text="Teachers"
        onClick={() => changeSection(SECTION_TEACHERS)}
        selected={section === SECTION_TEACHERS}
      />
      <ASTIButton
        text="Merchandise"
        onClick={() => changeSection(SECTION_MERCHANDISE)}
        selected={section === SECTION_MERCHANDISE}
      />
      <ASTIButton
        text="Resources"
        onClick={() => changeSection(SECTION_RESOURCES)}
        selected={section === SECTION_RESOURCES}
      />
      <ASTIButton
        text="About"
        onClick={() => changeSection(SECTION_ABOUT)}
        selected={section === SECTION_ABOUT}
      />
    </Box>
  );
}

ASTINavBar.propTypes = {
  section: PropTypes.string.isRequired,
  setSection: PropTypes.func.isRequired,
};
