import { styled, alpha } from '@mui/material/styles';
import Typograpghy from '@mui/material/Typography';
import Button from '@mui/material/Button';

export const Header = styled('div')(({ theme }) => ({
  position: 'absolute',
  zIndex: 5,
  top: 0,
  left: 0,
  width: '100%',
  height: 68,
  padding: '28px 24px 8px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderTopLeftRadius: 24,
  borderTopRightRadius: 24,
  backgroundColor: alpha(theme.palette.common.light, 0.5),
  backdropFilter: 'blur(22px)',
}));

export const HeaderLine = styled('div')(({ theme }) => ({
  position: 'absolute',
  zIndex: 1,
  top: 0,
  left: 0,
  width: '100%',
  height: 28,
  borderTopLeftRadius: 24,
  borderTopRightRadius: 24,
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 8,
    left: '50%',
    transform: 'translateX(-50%)',
    width: 88,
    height: 4,
    borderRadius: 100,
    backgroundColor: alpha(theme.palette.grey[500], 0.3),
  },
}));

export const Title = styled(Typograpghy)({
  width: '100%',
  paddingLeft: 120,
  paddingRight: 120,
  lineHeight: '32px',
  fontWeight: 700,
  textAlign: 'center',
});

export const Content = styled('div')({
  flexGrow: 1,
  maxHeight: '100%',
  padding: '76px 24px 32px',
  display: 'flex',
  flexDirection: 'column',
  overflowY: 'auto',
});

export const ControlButton = styled(Button)(({ control }) => ({
  position: 'absolute',
  zIndex: 1,
  bottom: 8,
  left: control === 'left' && 24,
  right: control === 'right' && 24,
}));
