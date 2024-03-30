'use client';

import { useEffect } from 'react';
import '../globals.css';
import { NAVIGATION_LINK } from '@/enums/navigation.enum';
import { useRouter } from 'next/navigation';
import { useAppSelector } from '@/lib/hooks/useAppSelector';
import { useAppDispatch } from '@/lib/hooks/useAppDispatch';
import { getInfo } from '@/lib/features/session-slice';

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = useAppSelector((state) => state.sessionReducer);
  const dispatch = useAppDispatch();
  const router = useRouter();

  useEffect(() => {
    dispatch(getInfo({}));
  }, [dispatch]);

  useEffect(() => {
    if (session.isLoadData && session.isLogged) {
      router.push(NAVIGATION_LINK.HOME);
    }
  }, [router, session]);

  return (
    <>
      {!session.isLogged && (
        <div className="flex items-center justify-center h-screen">
          {children}
        </div>
      )}
    </>
  );
}
