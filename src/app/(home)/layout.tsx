import type { Metadata } from 'next';

import '../globals.css';
import SideBar from '@/components/sidebar';
import Header from '@/components/header';
import { ScrollArea } from '@/components/ui/scroll-area';

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
    <main className="flex w-screen">
      <SideBar></SideBar>
      <ScrollArea className="main w-full h-screen">
        <Header></Header>
        <div className="max-w-[1920px] mx-auto my-0">
          <main className="mx-2">{children}</main>
        </div>
      </ScrollArea>
    </main>
  );
}
