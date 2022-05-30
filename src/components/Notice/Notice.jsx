import { useSnackbar } from 'notistack';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectNotice } from 'store/slices/noticeSlice';

const Notice = () => {
  const { enqueueSnackbar } = useSnackbar();
  const { show, message, variant } = useSelector(selectNotice);

  useEffect(() => {
    if (show) {
      enqueueSnackbar(message, { variant: variant });
    }
  }, [enqueueSnackbar, show, message, variant]);

  return null;
};

export default Notice;
