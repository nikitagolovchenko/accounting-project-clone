import Box from '@mui/material/Box';
import SvgIcon from '@mui/material/SvgIcon';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { InfoCardHolder, InfoIcon } from './styles';

const InfoCard = ({ icon: Icon, color, currency, title, list }) => {
  return (
    <InfoCardHolder>
      <Box display='flex' alignItems='center' mb={2}>
        <InfoIcon color={color} mr={2}>
          <SvgIcon component={Icon} svgstroke='true' sx={{ fontSize: 32 }} />
        </InfoIcon>
        <ListItemText
          primary={<Typography variant='h2'>{title}</Typography>}
          secondary={
            <Typography variant='body3' color='text.secondary'>
              {currency}
            </Typography>
          }
          main='true'
        />
      </Box>
      <List disablePadding>
        {list.map(({ label, value }, index) => (
          <ListItem
            disablePadding
            key={`${label}-${index}`}
            sx={{
              marginBottom: 1,
              '&:last-child': {
                marginBottom: 0,
              },
            }}
          >
            <ListItemText
              primary={value}
              secondary={label}
              key={`${value}-${index}`}
              main='true'
            />
          </ListItem>
        ))}
      </List>
    </InfoCardHolder>
  );
};

export default InfoCard;
