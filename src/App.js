import { useEffect } from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import AppRouter from 'components/router/AppRouter';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuth } from 'store/slices/authSlice';
import { startAuthListener } from './store/slices/authSlice';

function App() {
  const dispatch = useDispatch();
  const { user } = useSelector(selectAuth);

  useEffect(() => {
    dispatch(startAuthListener());
  }, [dispatch]);

  return user === undefined ? <LinearProgress /> : <AppRouter />;
}

export default App;
