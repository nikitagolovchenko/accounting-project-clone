import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';

export const NavBtnWrapper = styled(Box)({
  flexGrow: '0 !important',
  width: 'auto !important',
  minWidth: 'auto !important',
  pointerEvents: 'none',
  '& > .MuiTouchRipple-root': {
    display: 'none',
  },
});

export const StyledFab = styled(Fab)({
  pointerEvents: 'all',
});
