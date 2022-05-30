import { NavLink } from 'react-router-dom';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Tooltip from '@mui/material/Tooltip';
import NavBtn from 'components/navigation/NavBtn';
import { NavWrapper } from './styles';
import navigation from 'constants/navigation';
import { useSelector } from 'react-redux';
import { selectAuth } from 'store/slices/authSlice';

const Nav = () => {
  const { user } = useSelector(selectAuth);

  if (!user) {
    return null;
  }

  return (
    <NavWrapper>
      <BottomNavigation>
        {navigation.map(({ actionBtn, title, ...rest }) => (
          <Tooltip title={title} key={title}>
            <BottomNavigationAction
              component={actionBtn ? NavBtn : NavLink}
              {...rest}
            />
          </Tooltip>
        ))}
      </BottomNavigation>
    </NavWrapper>
  );
};

export default Nav;
