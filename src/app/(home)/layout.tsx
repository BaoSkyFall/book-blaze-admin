'use client';

import Header from '@/components/header';
import SideBar from '@/components/sidebar';
import { ScrollArea } from '@/components/ui/scroll-area';
import { getInfo } from '@/lib/features/session-slice';
import { useAppDispatch } from '@/lib/hooks/useAppDispatch';
import { useEffect } from 'react';
import '../globals.css';
import { useAppSelector } from '@/lib/hooks/useAppSelector';
import { useRouter } from 'next/navigation';
import { NAVIGATION_LINK } from '@/enums/navigation.enum';

export default function HomeLayout({
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
    if (session.isLoadData && !session.isLogged) {
      router.push(NAVIGATION_LINK.LOGIN);
    }
  }, [router, session]);
  return (
    <>
      {session.isLogged && (
        <main className="flex w-screen">
          <SideBar></SideBar>
          <ScrollArea className="main w-full h-screen">
            <Header></Header>
            <div className="max-w-[1920px] mx-auto my-0">
              <main className="mx-2">{children}</main>
            </div>
          </ScrollArea>
        </main>
      )}
    </>
  );
}
