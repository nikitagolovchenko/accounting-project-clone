import { createTheme, alpha } from '@mui/material/styles';
import { ReactComponent as ChevroneDownIcon } from 'assets/images/chevrone-down-icon.svg';
import colors from 'constants/colors';

let theme = createTheme({});

theme = createTheme(theme, {
  palette: { ...colors },
});

theme = createTheme(theme, {
  typography: {
    fontFamily: '"Inter", sans-serif',
    fontWeightSemiBold: 600,
    h1: {
      fontFamily: '"Poppins", sans-serif',
      fontWeight: 600,
      fontSize: '2.25rem',
      lineHeight: 1.33333,
      letterSpacing: 'normal',
    },
    h1sm: {
      fontFamily: '"Poppins", sans-serif',
      fontWeight: 600,
      fontSize: '2rem',
      lineHeight: 1.25,
      letterSpacing: 'normal',
    },
    h2: {
      fontFamily: '"Poppins", sans-serif',
      fontSize: '1.25rem',
      letterSpacing: 'normal',
      lineHeight: 1.2,
    },
    h3: {
      fontFamily: '"Poppins", sans-serif',
      fontWeight: 600,
      fontSize: '1.125rem',
      lineHeight: 1.11111,
      letterSpacing: 'normal',
    },
    h4: {
      letterSpacing: 'normal',
    },
    h5: {
      letterSpacing: 'normal',
    },
    h6: {
      letterSpacing: 'normal',
    },
    subtitle1: {
      fontFamily: '"Inter", sans-serif',
      letterSpacing: 'normal',
    },
    subtitle2: {
      fontFamily: '"Inter", sans-serif',
      letterSpacing: 'normal',
    },
    body1: {
      fontFamily: '"Inter", sans-serif',
      letterSpacing: 'normal',
    },
    body2: {
      fontFamily: '"Inter", sans-serif',
      letterSpacing: 'normal',
      lineHeight: 1.53846,
      fontSize: '0.8125rem',
    },
    body3: {
      fontFamily: '"Inter", sans-serif',
      fontSize: '0.8125rem',
      fontWeight: 500,
      lineHeight: 1.84615,
      letterSpacing: 'normal',
    },
    button: {
      fontFamily: '"Inter", sans-serif',
      fontSize: '0.875rem',
      lineHeight: 1.7143,
      fontWeight: 700,
      letterSpacing: 'normal',
      textTransform: 'normal',
    },
    caption: {
      fontFamily: '"Inter", sans-serif',
      letterSpacing: 'normal',
    },
    overline: {
      fontFamily: '"Inter", sans-serif',
      letterSpacing: 'normal',
    },
  },
  shape: {
    borderRadiusMd: 16,
    borderRadiusLg: 20,
    borderRadiusXl: 24,
  },
  shadows: {
    ...theme.shadows,
    1: `0px 40px 100px ${alpha('#1C1CA6', 0.1)}`,
    2: `0px 40px 100px ${alpha('#1C1CA6', 0.1)}, 0 10px 10px ${alpha(
      '#1C1CA6',
      0.1
    )}`,
    3: `0px 40px 100px ${alpha('#1C1CA6', 0.1)}, 0 10px 20px ${alpha(
      '#1C1CA6',
      0.1
    )}`,
    4: `0 10px 10px ${alpha(theme.palette.common.black, 0.1)}`,
    5: `0 12px 10px ${alpha(theme.palette.common.black, 0.1)}`,
    6: `0 12px 12px ${alpha(theme.palette.common.black, 0.2)}`,
    7: '0px 8px 12px rgba(0, 0, 0, 0.25)',
  },
  zIndex: {
    drawer: 1200,
  },
});

theme = createTheme(theme, {
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          fontFamily: '"Inter", sans-serif',
          letterSpacing: 'normal',
        },
        'input::-webkit-outer-spin-button': {
          '-webkit-appearance': 'none',
          margin: 0,
        },
        'input::-webkit-inner-spin-button': {
          '-webkit-appearance': 'none',
          margin: 0,
        },
        'input[type=number]': {
          '-moz-appearance': 'textfield',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          color: 'inherit',
          backgroundColor: 'transparent',
          boxShadow: 'none',
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          minHeight: '48px !important',
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        popper: {
          zIndex: 500,
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          width: 48,
          height: 48,
          backgroundColor: theme.palette.info.main,
          boxShadow: theme.shadows[4],
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          maxWidth: 768,
          paddingLeft: 24,
          paddingRight: 24,
          [theme.breakpoints.up('sm')]: {
            paddingLeft: 24,
            paddingRight: 24,
          },
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.svgstroke === 'true' && {
            fill: 'none',
            stroke: 'currentColor',
          }),
        }),
      },
    },
    MuiBottomNavigation: {
      styleOverrides: {
        root: {
          height: 72,
          borderTopLeftRadius: theme.shape.borderRadiusLg,
          borderTopRightRadius: theme.shape.borderRadiusLg,
          backgroundColor: alpha('#F1F3FE', 0.5),
          backdropFilter: 'blur(22px)',
          overflow: 'hidden',
        },
      },
    },
    MuiBottomNavigationAction: {
      styleOverrides: {
        root: {
          color: 'currentColor',
          '&:hover': {
            color: theme.palette.primary.main,
          },
          '&.active': {
            '.hover-filled': {
              fill: 'currentColor',
            },
            '.hover-filled-white': {
              fill: theme.palette.common.white,
            },
            '.hover-filled-stroke-white': {
              fill: theme.palette.common.white,
              stroke: theme.palette.common.white,
            },
            '.hover-stroke-white': {
              stroke: theme.palette.common.white,
            },
          },
        },
      },
    },
    MuiFab: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          width: 40,
          height: 40,
          boxShadow: `0 8px 12px ${alpha(
            theme.palette[ownerState.color].main,
            0.4
          )}`,
        }),
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          minHeight: 48,
          padding: '12px 16px',
          borderRadius: theme.shape.borderRadiusXl,
          '.MuiButton-startIcon': {
            marginLeft: 0,
            marginRight: 16,
            '& > *:nth-of-type(1)': {
              fontSize: 24,
            },
          },
        },
        contained: {
          boxShadow: theme.shadows[4],
          '&:hover': {
            boxShadow: theme.shadows[5],
          },
          '&:active': {
            boxShadow: theme.shadows[6],
          },
        },
        containedLight: {
          padding: '20px 16px',
          borderRadius: theme.shape.borderRadiusMd,
          boxShadow: theme.shadows[1],
          '&:hover': {
            boxShadow: theme.shadows[2],
          },
          '&:active': {
            boxShadow: theme.shadows[3],
          },
        },
        outlinedPrimary: {
          borderColor: theme.palette.primary.light,
        },
        sizeSmall: {
          minHeight: 32,
          minWidth: 'auto',
          padding: '4px 20px',
          fontSize: '0.875rem',
          lineHeight: 1.7143,
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        root: {
          '.MuiBackdrop-root': {
            backgroundColor: alpha(theme.palette.grey[1000], 0.8),
          },
        },
        paper: {
          maxHeight: 'calc(100% - 48px)',
          borderTopLeftRadius: theme.shape.borderRadiusXl,
          borderTopRightRadius: theme.shape.borderRadiusXl,
          backgroundColor: theme.palette.background.default,
          boxShadow: theme.shadows[7],
        },
        paperAnchorBottom: ({ ownerState }) => ({
          ...(ownerState.drawersmall === 'true' && {
            left: 12,
            right: 12,
            bottom: 20,
            paddingTop: 20,
            borderRadius: theme.shape.borderRadiusXl,
            '&::before': {
              content: '""',
              position: 'absolute',
              zIndex: 1,
              top: 8,
              left: '50%',
              transform: 'translateX(-50%)',
              width: 88,
              height: 4,
              borderRadius: 100,
              backgroundColor: alpha(theme.palette.grey[500], 0.3),
            },
          }),
        }),
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          padding: '16px 20px',
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          minWidth: 40,
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.main === 'true' && {
            display: 'flex',
            flexDirection: 'column-reverse',
            marginTop: 0,
            marginBottom: 0,
          }),
        }),
        primary: {
          fontWeight: 700,
        },
        secondary: {
          marginBottom: 2,
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          flexShrink: 0,
          flexGrow: 1,
          position: 'static',
          maxWidth: 'none',
          marginBottom: 8,
          transform: 'none',
          fontSize: 10,
          lineHeight: 1.6,
          color: alpha(theme.palette.grey[500], 0.6),
          letterSpacing: 0.5,
          textTransform: 'uppercase',
          fontWeight: 700,
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          marginTop: 0,
          marginBottom: 8,
          marginleft: 8,
          transform: 'none',
          fontSize: 11,
          lineHeight: 1.4546,
          letterSpacing: 0.5,
          fontWeight: 700,
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          fontWeight: 600,
          lineHeight: 1.5,
          '&.MuiInputBase-adornedEnd': {
            paddingRight: 20,
          },
        },
        input: {
          '&::placeholder': {
            opacity: 0.4,
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          backgroundColor: theme.palette.common.white,
          borderRadius: theme.shape.borderRadiusMd,
          boxShadow: theme.shadows[1],
          '&:not(.Mui-focused):not(.Mui-error)': {
            '.MuiOutlinedInput-notchedOutline': {
              borderColor: 'transparent',
            },
          },
        },
        input: {
          padding: '16.5px 20px',
        },
        notchedOutline: {
          borderWidth: 2,
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          width: '100%',
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          display: 'inline-block',
          verticalAlign: 'top',
          fontWeight: 700,
          transition: theme.transitions.create('color'),
          '&:hover': {
            color: theme.palette.primary.main,
          },
        },
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          position: 'fixed',
          zIndex: 3000,
          top: 0,
          left: 0,
          width: '100%',
        },
      },
    },
    MuiSelect: {
      defaultProps: {
        IconComponent: ChevroneDownIcon,
      },
      styleOverrides: {
        select: {
          borderRadius: theme.shape.borderRadiusMd,
        },
        icon: {
          top: '50%',
          right: 20,
          transform: 'translateY(-50%)',
          color: 'currentColor',
          fill: 'currentColor',
        },
      },
    },
  },
});

export default theme;
