import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export const Form = styled('form')({
  flexGrow: 1,
  display: 'flex',
  flexDirection: 'column',
});

export const FormBottom = styled(Box)({
  marginTop: 'auto',
});

export const Wrapper = styled(Box)({
  position: 'relative',
  width: '100%',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
  paddingTop: 44,
  paddingBottom: 80,
});

export const Main = styled(Box)({
  flexGrow: 1,
  display: 'flex',
  flexDirection: 'column',
});

export const MainContainer = styled(Container)({
  flexGrow: 1,
  display: 'flex',
  flexDirection: 'column',
});
