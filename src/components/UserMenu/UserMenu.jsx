import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import { stringAvatar } from 'utils/stringAvatar';

const UserMenu = ({ user, children, anchorEl, onOpen, onClose }) => {
  return (
    <Box sx={{ flexGrow: 0, marginLeft: 2 }}>
      <Tooltip title='User menu'>
        <IconButton onClick={onOpen} sx={{ p: 0 }}>
          {user.photoURL ? (
            <Avatar alt={user.displayName} src={user.photoURL} />
          ) : (
            user.displayName && <Avatar {...stringAvatar(user.displayName)} />
          )}
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: '53px' }}
        id='menu-header'
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorEl)}
        onClose={onClose}
      >
        {children}
      </Menu>
    </Box>
  );
};

export default UserMenu;
