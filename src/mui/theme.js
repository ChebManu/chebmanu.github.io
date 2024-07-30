import { createTheme } from '@mui/material';
import { ASTIROIDS_BLACK, ASTIROIDS_GRAY, ASTIROIDS_WHITE } from './colors';

const theme = createTheme({
  palette: {
    background: {
      default: ASTIROIDS_BLACK,
    },
    primary: {
      main: ASTIROIDS_WHITE,
    },
    secondary: {
      main: ASTIROIDS_GRAY,
    },
  },
  spacing: 4,
  typography: {
    fontFamily: 'Courier New',
  },
  fontSizes: {
    small: {
      xs: '0.7rem',
      sm: '0.7rem',
      md: '0.8rem',
      lg: '0.8rem',
      xl: '0.9rem',
    },
    normal: {
      xs: '0.9rem',
      sm: '1rem',
      md: '1rem',
      lg: '1rem',
      xl: '1.2rem',
    },
    big: {
      xs: '0.9rem',
      sm: '1.4rem',
      md: '1.6rem',
      lg: '1.8rem',
      xl: '1.9rem',
    },
    header: {
      xs: '1rem',
      sm: '1.7rem',
      md: '2rem',
      lg: '2.2rem',
      xl: '2.5rem',
    },
    button: {
      // xs: '0.9rem',
      // sm: '0.9rem',
      // md: '1rem',
      // lg: '1rem',
      // xl: '1.1rem',
      xs: '0.9rem',
      sm: '1rem',
      md: '1.1rem',
      lg: '1.1rem',
      xl: '1.3rem',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

theme.typography.normal = {
  fontFamily: 'Courier New',
  fontWeight: 400,
  [theme.breakpoints.down('xs')]: {
    fontSize: theme.fontSizes.normal.xs,
  },
  [theme.breakpoints.between('xs', 'sm')]: {
    fontSize: theme.fontSizes.normal.xs,
  },
  [theme.breakpoints.between('sm', 'md')]: {
    fontSize: theme.fontSizes.normal.sm,
  },
  [theme.breakpoints.between('md', 'lg')]: {
    fontSize: theme.fontSizes.normal.md,
  },
  [theme.breakpoints.between('lg', 'xl')]: {
    fontSize: theme.fontSizes.normal.lg,
  },
  [theme.breakpoints.up('xl')]: {
    fontSize: theme.fontSizes.normal.xl,
  },
};

theme.typography.button = {
  fontFamily: 'Courier New',
  fontWeight: 400,
  [theme.breakpoints.down('xs')]: {
    fontSize: theme.fontSizes.button.xs,
  },
  [theme.breakpoints.between('xs', 'sm')]: {
    fontSize: theme.fontSizes.button.xs,
  },
  [theme.breakpoints.between('sm', 'md')]: {
    fontSize: theme.fontSizes.button.sm,
  },
  [theme.breakpoints.between('md', 'lg')]: {
    fontSize: theme.fontSizes.button.md,
  },
  [theme.breakpoints.between('lg', 'xl')]: {
    fontSize: theme.fontSizes.button.lg,
  },
  [theme.breakpoints.up('xl')]: {
    fontSize: theme.fontSizes.button.xl,
  },
};

theme.typography.header = {
  fontFamily: 'Courier New',
  fontWeight: 800,
  [theme.breakpoints.down('xs')]: {
    fontSize: theme.fontSizes.header.xs,
  },
  [theme.breakpoints.between('xs', 'sm')]: {
    fontSize: theme.fontSizes.header.xs,
  },
  [theme.breakpoints.between('sm', 'md')]: {
    fontSize: theme.fontSizes.header.sm,
  },
  [theme.breakpoints.between('md', 'lg')]: {
    fontSize: theme.fontSizes.header.md,
  },
  [theme.breakpoints.between('lg', 'xl')]: {
    fontSize: theme.fontSizes.header.lg,
  },
  [theme.breakpoints.up('xl')]: {
    fontSize: theme.fontSizes.header.xl,
  },
};

theme.typography.title = {
  fontFamily: 'Courier New',
  fontWeight: 800,
  [theme.breakpoints.down('xs')]: {
    fontSize: theme.fontSizes.big.xs,
  },
  [theme.breakpoints.between('xs', 'sm')]: {
    fontSize: theme.fontSizes.big.xs,
  },
  [theme.breakpoints.between('sm', 'md')]: {
    fontSize: theme.fontSizes.big.sm,
  },
  [theme.breakpoints.between('md', 'lg')]: {
    fontSize: theme.fontSizes.big.md,
  },
  [theme.breakpoints.between('lg', 'xl')]: {
    fontSize: theme.fontSizes.big.lg,
  },
  [theme.breakpoints.up('xl')]: {
    fontSize: theme.fontSizes.big.xl,
  },
};

export default theme;
