import { forwardRef, useState } from 'react';
import SvgIcon from '@mui/material/SvgIcon';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import PopupMenu from 'components/PopupMenu';
import { ReactComponent as PlusIcon } from 'assets/images/plus-icon.svg';
import { StyledFab, NavBtnWrapper } from './styles'
import addButtonMenu from 'constants/addButtonMenu';

const NavBtn = forwardRef(({ children, ...props }, ref) => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = newOpen => () => {
    setOpen(newOpen);
  };

  return (
    <NavBtnWrapper {...props} ref={ref}>
      <StyledFab
        color='primary'
        aria-label='action button'
        onClick={toggleDrawer(true)}
      >
        <SvgIcon
          component={PlusIcon}
          svgstroke='true'
          viewBox='0 0 10 10'
          sx={{ fontSize: 10 }}
        />
      </StyledFab>

      {children}

      <SwipeableDrawer
        anchor='bottom'
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        drawersmall='true'
      >
        <Box
          sx={{ width: 'auto' }}
          role='presentation'
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <PopupMenu list={addButtonMenu} />
        </Box>
      </SwipeableDrawer>
    </NavBtnWrapper>
  );
});

export default NavBtn;
