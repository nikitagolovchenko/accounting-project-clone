import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

export const NavWrapper = styled(Box)(({ theme }) => ({
  position: 'fixed',
  zIndex: theme.zIndex.appBar,
  bottom: 0,
  left: 0,
  width: '100%',
}));
