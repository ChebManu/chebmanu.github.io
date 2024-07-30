import React from 'react';
import { Typography } from '@mui/material';
import PropTypes from 'prop-types';

export default function ASTITitle(props) {
  const { text } = props;

  return (
    <Typography variant="title" color="primary.main">
      {text}
    </Typography>
  );
}

ASTITitle.propTypes = {
  text: PropTypes.string.isRequired,
};
