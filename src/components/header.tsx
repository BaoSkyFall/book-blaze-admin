'use client';

import React, { useMemo, useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { useTheme } from 'next-themes';
import { Button } from './ui/button';
import { Moon, Settings, Sun } from 'lucide-react';
import SideBarMobile from './sidebar-mobile';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import { NAVIGATION_SIDEBAR } from '@/enums/navigation.enum';

const Header = () => {
  const { setTheme, theme } = useTheme();
  const pathname = usePathname();

  const title = useMemo(() => {
    let titleName = '';
    NAVIGATION_SIDEBAR.forEach((navItem) => {
      navItem.children.forEach((child) => {
        if (pathname.includes(child.link)) {
          titleName = child.name;
        }
      });
    });
    return titleName;
  }, [pathname]);

  return (
    <main
      className={cn(
        'header sticky top-0 w-full flex justify-between items-center pl-2 pr-5 h-[60px] z-40 shadow-sm ml-3',
        theme === 'dark' ? 'bg-[#0c0a09]' : 'bg-white',
      )}
    >
      <div className="title-page flex gap-4">
        <SideBarMobile></SideBarMobile>
        <span>{title}</span>
      </div>
      <div className="header-content flex gap-4">
        <div className="setting">
          <Button variant="outline" size="icon">
            <Settings
              className={cn(
                theme === 'dark'
                  ? 'absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100'
                  : 'h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0',
              )}
            />
          </Button>
        </div>
        <div className="themes">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          >
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>
        <div className="user-info">
          <DropdownMenu>
            <DropdownMenuTrigger className="border-none outline-none">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>TT</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mr-5">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </main>
  );
};

export default Header;
