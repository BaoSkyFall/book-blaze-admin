import { Gauge, LayoutDashboard } from 'lucide-react';

export const NAVIGATION_SIDEBAR = [
  {
    nameGroup: 'Overview',
    expand: true,
    children: [
      {
        name: 'Thống Kê',
        logo: Gauge,
        link: '/dashboard',
      },
      {
        name: 'Thử Thống Kê',
        logo: LayoutDashboard,
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
        logo: Gauge,
        link: '/dashboard2',
      },
      {
        name: 'dashboard3',
        logo: Gauge,
        link: '/dashboard3',
      },
    ],
  },
];

// https://lucide.dev/icons/
