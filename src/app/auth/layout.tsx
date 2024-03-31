'use client';

import { useEffect } from 'react';
import '../globals.css';
import { NAVIGATION_LINK } from '@/enums/navigation.enum';
import { useRouter } from 'next/navigation';

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  useEffect(() => {
    if (
      localStorage.getItem(process.env.NEXT_PUBLIC_NAME_TOKEN ?? 'access_token')
    ) {
      router.push(NAVIGATION_LINK.HOME);
    }
  }, [router]);

  return (
    <>
      {
        <div className="flex items-center justify-center h-screen">
          {children}
        </div>
      }
    </>
  );
}
