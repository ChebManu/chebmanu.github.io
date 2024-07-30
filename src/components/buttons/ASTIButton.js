import React from 'react';
import PropTypes from 'prop-types';
import { Box, Button, Typography, useTheme } from '@mui/material';

export default function ASTIButton(props) {
  const { text, onClick, selected } = props;
  const theme = useTheme();

  return (
    <Button
      onClick={onClick}
      sx={{
        textTransform: 'none',
        textDecoration: selected ? 'underline' : 'none',
        ':hover': {
          backgroundColor: theme.palette.secondary.main,
          textDecoration: selected ? 'underline' : 'none',
        },
      }}
    >
      <Box p={1.5}>
        <Typography variant="button">{text}</Typography>
      </Box>
    </Button>
  );
}

ASTIButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  selected: PropTypes.bool.isRequired,
};
