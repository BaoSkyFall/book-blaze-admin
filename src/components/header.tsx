'use client';

import React, { useMemo } from 'react';
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
import { usePathname, useRouter } from 'next/navigation';
import { NAVIGATION_LINK, NAVIGATION_SIDEBAR } from '@/enums/navigation.enum';
import { useAppDispatch } from '@/lib/hooks/useAppDispatch';
import { logOut } from '@/lib/features/session-slice';

const Header = () => {
  const { setTheme, theme } = useTheme();
  const pathname = usePathname();
  const dispatch = useAppDispatch();
  const router = useRouter();

  const title = useMemo(() => {
    let titleName = '';
    NAVIGATION_SIDEBAR.forEach((navItem) => {
      if (pathname.includes(navItem.link)) {
        titleName = navItem.name;
      }
    });
    return titleName;
  }, [pathname]);

  const onClickLogOut = async () => {
    await dispatch(logOut());
    router.push(NAVIGATION_LINK.LOGIN);
  };

  return (
    <main
      style={{
        backdropFilter: 'saturate(200%) blur(6px)',
      }}
      className={cn(
        'header sticky top-0 w-full flex justify-between items-center pl-2 pr-5 h-[60px] z-40 bg-[hsl(var(--background))]',
      )}
    >
      <div className="title-page flex gap-4">
        <SideBarMobile></SideBarMobile>
        {/* <span>{title}</span> */}
      </div>
      <div className="header-content flex gap-4">
        <div className="setting">
          <Button variant="outline" size="icon">
            <Settings className={cn('h-[1.2rem] w-[1.2rem] transition-all')} />
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
              <DropdownMenuItem onClick={onClickLogOut}>
                Log Out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </main>
  );
};

export default Header;
