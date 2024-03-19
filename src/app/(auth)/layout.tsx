import type { Metadata } from 'next';

import '../globals.css';

export const metadata: Metadata = {
  title: 'Administrator Booking Ticket',
  description: 'Administrator Booking Ticket',
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="content">{children}</div>;
}
