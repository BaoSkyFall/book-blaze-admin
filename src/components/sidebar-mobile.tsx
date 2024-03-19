'use client';

import React from 'react';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { BarChart2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import SideBar from './sidebar';
import { useTheme } from 'next-themes';

const SideBarMobile = () => {
  const { theme } = useTheme();
  return (
    <Sheet>
      <SheetTrigger>
        <BarChart2
          strokeWidth={0.5}
          className={cn('rotate-90 cursor-pointer', 'lg:hidden')}
        />
      </SheetTrigger>
      <SheetContent side={'left'} className="w-full h-full">
        <SideBar isMobile={true}></SideBar>
      </SheetContent>
    </Sheet>
  );
};

export default SideBarMobile;
