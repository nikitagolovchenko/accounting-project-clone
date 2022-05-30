import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuth, signOut } from 'store/slices/authSlice';
import UserMenu from 'components/UserMenu';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const { user } = useSelector(selectAuth);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = event => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleNavigate = path => {
    setAnchorElUser(null);
    navigate(path, { state: { background: location } });
  };

  const handleSignOut = () => {
    setAnchorElUser(null);
    dispatch(signOut());
  };

  return (
    <AppBar position='static'>
      <Container>
        <Toolbar disableGutters>
          <Typography variant='h3' noWrap sx={{ flexGrow: 1 }}>
            Tazamba
          </Typography>
          {user && (
            <UserMenu
              user={user}
              anchorEl={anchorElUser}
              onOpen={handleOpenUserMenu}
              onClose={handleCloseUserMenu}
            >
              <MenuItem onClick={() => handleNavigate('/profile')}>
                <Typography textAlign='center'>Profile</Typography>
              </MenuItem>
              <MenuItem onClick={handleSignOut}>
                <Typography textAlign='center' color='error'>
                  Sign Out
                </Typography>
              </MenuItem>
            </UserMenu>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
