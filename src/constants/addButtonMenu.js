import SvgIcon from '@mui/material/SvgIcon';
import { ReactComponent as FolderIcon } from 'assets/images/folder-icon.svg';
import { ReactComponent as WalletIcon } from 'assets/images/wallet-icon.svg';
import { ReactComponent as CloseIcon } from 'assets/images/close-icon.svg';

const addButtonMenu = [
  {
    icon: <SvgIcon component={FolderIcon} svgstroke='true' color='primary' />,
    text: 'Add Asset/Liability',
  },
  {
    icon: <SvgIcon component={WalletIcon} svgstroke='true' color='success' />,
    text: 'Add Money In/Out',
  },
  {
    icon: <SvgIcon component={CloseIcon} svgstroke='true' color='error.second' />,
    text: 'Close',
  },
];

export default addButtonMenu;
