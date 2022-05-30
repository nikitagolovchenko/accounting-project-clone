import SvgIcon from '@mui/material/SvgIcon';
import { ReactComponent as DashboardIcon } from 'assets/images/dashboard-icon.svg';
import { ReactComponent as DocumentIcon } from 'assets/images/document-icon.svg';
import { ReactComponent as WalletIcon } from 'assets/images/wallet-icon.svg';
import { ReactComponent as FolderIcon } from 'assets/images/folder-icon.svg';

const navigation = [
  {
    title: 'Home',
    to: 'home',
    icon: <SvgIcon component={DashboardIcon} svgstroke='true' />,
  },
  {
    title: 'News',
    to: 'news',
    icon: <SvgIcon component={DocumentIcon} svgstroke='true' />,
  },
  {
    actionBtn: true,
    title: 'Action button',
  },
  {
    title: 'MoneyIn/Out',
    to: 'money-in-out',
    icon: <SvgIcon component={WalletIcon} svgstroke='true' />,
  },
  {
    title: 'Assets/Liabilities',
    to: 'assets-liabilities',
    icon: <SvgIcon component={FolderIcon} svgstroke='true' />,
  },
];

export default navigation;
