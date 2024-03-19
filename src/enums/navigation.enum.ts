import { AiFillDashboard } from 'react-icons/ai';

export const NAVIGATION_SIDEBAR = [
  {
    nameGroup: 'OVERVIEW',
    expand: true,
    children: [
      {
        name: 'dashboard',
        logo: AiFillDashboard,
        link: '/dashboard',
      },
      {
        name: 'dashboard1',
        logo: AiFillDashboard,
        link: '/dashboard1',
      },
    ],
  },
  {
    nameGroup: 'OVERVIEW1',
    expand: true,
    children: [
      {
        name: 'dashboard2',
        logo: AiFillDashboard,
        link: '/dashboard2',
      },
      {
        name: 'dashboard3',
        logo: AiFillDashboard,
        link: '/dashboard3',
      },
    ],
  },
];
