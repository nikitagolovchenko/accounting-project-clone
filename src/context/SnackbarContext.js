import { createRef } from 'react';
import { SnackbarProvider as NotistackProvider } from 'notistack';
import IconButton from '@mui/material/IconButton';
import SvgIcon from '@mui/material/SvgIcon';
import Notice from 'components/Notice';
import { ReactComponent as CloseIcon } from 'assets/images/close-transparent-icon.svg';

export const SnackbarProvider = ({ children }) => {
  const notistackRef = createRef();

  const onClickDismiss = key => () => {
    notistackRef.current.closeSnackbar(key);
  };

  return (
    <NotistackProvider
      maxSnack={3}
      ref={notistackRef}
      action={key => (
        <IconButton
          aria-label='close notice'
          onClick={onClickDismiss(key)}
          color='light'
        >
          <SvgIcon component={CloseIcon} svgstroke='true' />
        </IconButton>
      )}
    >
      <Notice />
      {children}
    </NotistackProvider>
  );
};
