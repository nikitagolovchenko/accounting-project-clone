import { useSelector } from 'react-redux';
import { selectAuth } from 'store/slices/authSlice';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import SvgIcon from '@mui/material/SvgIcon';
import CardsSlider from 'components/CardsSlider';
import InfoCard from 'components/InfoCard/InfoCard';
import { ReactComponent as AddUserIcon } from 'assets/images/add-user-icon.svg';
import { ReactComponent as DocumentIcon } from 'assets/images/document-icon.svg';
import { ReactComponent as FolderIcon } from 'assets/images/folder-icon.svg';
import { ReactComponent as WalletIcon } from 'assets/images/wallet-icon.svg';
import currency from 'constants/currency';

const Home = () => {
  const { user } = useSelector(selectAuth);

  const info = [
    {
      icon: FolderIcon,
      color: 'secondary',
      title: 'Assets/Liabilities',
      currency: currency,
      list: [
        {
          label: 'Assets',
          value: `${currency} 4,950,000.00`,
        },
        {
          label: 'Liabilities',
          value: `${currency} 817,000,00`,
        },
        {
          label: 'Net Worth',
          value: `${currency} 4,133,000.00`,
        },
      ],
    },
    {
      icon: WalletIcon,
      color: 'success',
      title: 'Money In/Out',
      currency: currency,
      list: [
        {
          label: 'Money In',
          value: `${currency} 27,987,22`,
        },
        {
          label: 'Money Out',
          value: `${currency} 17,356.990`,
        },
        {
          label: 'Net',
          value: `${currency} 10,630.23`,
        },
      ],
    },
  ];

  return (
    <>
      <Typography variant='h1' mb={3}>
        Hello, <br /> {user.displayName ? user.displayName : 'User'} 👋
      </Typography>

      <CardsSlider>
        {info.map((infoItem, index) => (
          <InfoCard {...infoItem} key={index} />
        ))}
      </CardsSlider>

      <Grid container spacing={2.5}>
        <Grid item xs={6}>
          <Button
            color='light'
            variant='contained'
            startIcon={
              <SvgIcon
                component={AddUserIcon}
                svgstroke='true'
                sx={{ color: 'violet.main' }}
              />
            }
            fullWidth
          >
            Add User
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button
            color='light'
            variant='contained'
            startIcon={
              <SvgIcon
                component={DocumentIcon}
                svgstroke='true'
                sx={{ color: 'orange.main' }}
              />
            }
            fullWidth
          >
            Add Post
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
