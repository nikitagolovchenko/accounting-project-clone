import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

export const InfoCardHolder = styled(Box)(({ theme }) => ({
  padding: 24,
  backgroundColor: theme.palette.dark.main,
  borderRadius: theme.shape.borderRadiusLg,
  boxShadow: theme.shadows[1],
  color: theme.palette.common.white,
}));

export const InfoIcon = styled(Box)(({ color, theme }) => ({
  width: 56,
  height: 56,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: theme.shape.borderRadiusMd,
  backgroundColor: theme.palette.grey[500],
  backgroundImage: `linear-gradient(to right, ${theme.palette[color].gradientStart} 0%, ${theme.palette[color].gradientEnd} 100%)`,
  color: theme.palette.common.white,
}));
