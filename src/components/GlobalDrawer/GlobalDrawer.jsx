import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import { Header, HeaderLine, Title, Content, ControlButton } from './styles';

const GlobalDrawer = ({ children }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const theme = useTheme();

  useEffect(() => {
    setOpen(true);
  }, []);

  const handleClose = () => {
    setOpen(false);
    setTimeout(() => {
      navigate(-1);
    }, theme.transitions.duration.leavingScreen);
  };

  return (
    <SwipeableDrawer
      anchor='bottom'
      open={open}
      onOpen={() => setOpen(true)}
      onClose={handleClose}
    >
      <Header>
        <HeaderLine
          role='presentation'
          onClick={handleClose}
          onKeyDown={handleClose}
        />
        <ControlButton
          variant='text'
          size='small'
          color='text'
          sx={{ marginLeft: -2.5 }}
          onClick={handleClose}
          control='left'
        >
          Cancel
        </ControlButton>
        <Title noWrap>Profile</Title>
        <ControlButton
          variant='contained'
          size='small'
          onClick={handleClose}
          control='right'
        >
          Save
        </ControlButton>
      </Header>
      <Content>{children}</Content>
    </SwipeableDrawer>
  );
};

export default GlobalDrawer;
