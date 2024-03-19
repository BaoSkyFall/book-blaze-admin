import type { Metadata } from 'next';

import '../globals.css';
import SideBar from '@/components/sidebar';
import Header from '@/components/header';

export const metadata: Metadata = {
  title: 'Administrator Booking Ticket',
  description: 'Administrator Booking Ticket',
};

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex w-screen h-screen">
      <SideBar></SideBar>
      <div className="main w-full relative">
        <Header></Header>
        <div className="content">{children}</div>
      </div>
    </main>
  );
}
