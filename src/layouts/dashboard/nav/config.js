// component
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: icon('ic_analytics'),
  },
  {
    title: 'users',
    path: '/dashboard/users',
    icon: icon('ic_user'),
  },
  {
    title: 'transactions',
    path: '/dashboard/transactions',
    icon: icon('ic_cart'),
  },
  {
    title: 'airtime plan',
    path: '/dashboard/airtime',
    icon: icon('ic_cart'),
  },
  {
    title: 'data plan',
    path: '/dashboard/data',
    icon: icon('ic_cart'),
  },
];

export default navConfig;
