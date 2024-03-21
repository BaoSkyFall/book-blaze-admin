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
        name: 'Thống Kê 2',
        logo: LayoutDashboard,
        link: '/dashboard2',
      },
    ],
  },
  {
    nameGroup: 'OVERVIEW1',
    expand: true,
    children: [
      {
        name: 'dashboard1',
        logo: Gauge,
        link: '/dashboard1',
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
