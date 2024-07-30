import React from 'react';
import { Typography } from '@mui/material';
import PropTypes from 'prop-types';

export default function ASTIHeader(props) {
  const { text } = props;

  return (
    <Typography variant="header" color="primary.main">
      {text}
    </Typography>
  );
}

ASTIHeader.propTypes = {
  text: PropTypes.string.isRequired,
};
