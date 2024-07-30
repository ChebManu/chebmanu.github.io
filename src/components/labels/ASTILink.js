import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';

import { openTab } from '../../helpers/url';

export default function ASTILink(props) {
  const { text, url } = props;

  const handleClick = () => {
    openTab(url);
  };

  return (
    <Box onClick={handleClick}>
      <Typography
        variant="normal"
        color="primary.main"
        sx={{ textDecoration: 'underline', cursor: 'pointer' }}
      >
        {text}
      </Typography>
    </Box>
  );
}

ASTILink.propTypes = {
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
