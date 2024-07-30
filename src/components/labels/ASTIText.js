import React from 'react';
import { Typography } from '@mui/material';
import PropTypes from 'prop-types';

export default function ASTIText(props) {
  const { text } = props;

  return (
    <Typography variant="normal" color="primary.main" align="center">
      {text}
    </Typography>
  );
}

ASTIText.propTypes = {
  text: PropTypes.string.isRequired,
};
