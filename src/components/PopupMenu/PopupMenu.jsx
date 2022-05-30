import {Fragment} from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

const PopupMenu = ({ list }) => {
  return (
    <List disablePadding>
      {list.map(({ text, icon }, index) => (
        <Fragment key={`${text}-${index}`}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
          <Divider
            component='li'
            sx={{ '&:last-child': { display: 'none' } }}
          />
        </Fragment>
      ))}
    </List>
  );
};

export default PopupMenu;
