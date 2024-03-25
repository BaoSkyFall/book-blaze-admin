import {
  CalendarDays,
  CreditCard,
  GitFork,
  Home,
  Music,
  Sheet,
  TicketPercent,
  Users,
} from 'lucide-react';

export enum NAVIGATION_LINK {
  LOGIN = '/auth/login',
  HOME = '/',
  CUSTOMER = '/customer',
  STAGE = '/stage',
  SHOW = '/show',
  DISCOUNT = '/discount',
  PAYMENT = '/payment',
  SEAT_DIAGRAM = '/seat-diagram',
  USER = '/user',
}

export const NAVIGATION_SIDEBAR = [
  {
    name: 'Home',
    logo: Home,
    link: NAVIGATION_LINK.HOME,
  },
  {
    name: 'Khách Hàng',
    logo: Sheet,
    link: NAVIGATION_LINK.CUSTOMER,
  },
  {
    name: 'Sân Khấu',
    logo: Music,
    link: NAVIGATION_LINK.STAGE,
  },
  {
    name: 'Show Diễn',
    logo: CalendarDays,
    link: NAVIGATION_LINK.SHOW,
  },
  {
    name: 'Mã Giảm Giá',
    logo: TicketPercent,
    link: NAVIGATION_LINK.DISCOUNT,
  },
  {
    name: 'Thanh Toán',
    logo: CreditCard,
    link: NAVIGATION_LINK.PAYMENT,
  },
  {
    name: 'Sơ Đồ Chỗ Ngồi',
    logo: GitFork,
    link: NAVIGATION_LINK.SEAT_DIAGRAM,
  },
  {
    name: 'Quản Lý Người Dùng',
    logo: Users,
    link: NAVIGATION_LINK.USER,
  },
];

// https://lucide.dev/icons/
