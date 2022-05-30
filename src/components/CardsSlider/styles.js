import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

export const SliderWrapper = styled(Box)(({ theme }) => ({
  paddingBottom: 32,
  marginBottom: 20,
  '.slick-list': {
    margin: '0 -4px',
    overflow: 'visible',
  },
  '.slick-slide': {
    padding: '0 4px',
  },
  '.slick-dots': {
    bottom: 0,
    li: {
      margin: 0,
      width: 16,
      height: 16,
      button: {
        padding: 0,
        width: 16,
        height: 16,
        '&:hover': {
          '&::before': {
            opacity: 1,
          },
        },
        '&::before': {
          width: 16,
          height: 16,
          lineHeight: '16px',
          fontSize: 8,
          color: theme.palette.grey[500],
          opacity: 0.5,
          transition: theme.transitions.create(['color', 'opacity']),
        },
      },
      '&.slick-active': {
        button: {
          '&::before': {
            opacity: 1,
            color: theme.palette.primary.main,
          },
        },
      },
    },
  },
}));