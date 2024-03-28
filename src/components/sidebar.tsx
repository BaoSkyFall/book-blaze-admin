'use client';

import { usePathname, useRouter } from 'next/navigation';
import { BsChevronExpand } from 'react-icons/bs';

import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { NAVIGATION_SIDEBAR } from '@/enums/navigation.enum';
import { changeMinimal } from '@/lib/features/sidebar-slice';
import { useAppDispatch } from '@/lib/hooks/useAppDispatch';
import { useAppSelector } from '@/lib/hooks/useAppSelector';
import { cn } from '@/lib/utils';
import { Ticket } from 'lucide-react';

interface PropSideBar {
  isMobile?: boolean;
}

const SideBar = ({ isMobile = false }: PropSideBar) => {
  const router = useRouter();
  const pathname = usePathname();

  const dispatch = useAppDispatch();
  const isMinimal = useAppSelector((state) => state.sideBarReducer.isMinimal);

  const onClickMinimal = () => {
    dispatch(changeMinimal());
  };

  const onClickNavigation = (link: string) => {
    router.push(link);
  };

  return (
    <main
      className={cn(
        isMobile ? 'block' : 'hidden',
        isMobile
          ? 'border-none'
          : 'border-r-[1px] border-dashed sticky top-0 left-0 h-screen z-50',
        isMinimal && !isMobile ? 'lg:w-[170px]' : 'lg:w-[300px]',
        'lg:block',
      )}
    >
      <div className="logo flex justify-center items-center relative mt-2">
        <Ticket width={45} height={45} className="rotate-90" strokeWidth={1} />
        <span
          className={cn(
            'font-bold ',
            isMinimal && !isMobile ? 'text-sm' : 'text-xl',
          )}
        >
          Book Blazes
        </span>
        <BsChevronExpand
          onClick={onClickMinimal}
          size={25}
          strokeWidth={'0'}
          className={cn(
            'cursor-pointer border-none rotate-90 absolute',
            isMinimal && !isMobile ? 'right-[-7%]' : 'right-[-5%]',
            isMobile ? 'hidden' : 'block',
          )}
        />
      </div>
      <ScrollArea
        className={cn(
          'navigation max-h-screen pt-2 pb-2 pr-1',
          isMobile ? 'h-[calc(100vh-200px)]' : 'lg:h-[calc(100vh-100px)]',
        )}
      >
        <section className="flex justify-center flex-col m-2 gap-2">
          {NAVIGATION_SIDEBAR.map((navItem) => {
            return (
              <div key={navItem.name} className="flex flex-col gap-2 p-0 m-0">
                <Button
                  variant={pathname === navItem.link ? 'default' : 'ghost'}
                  className={cn(
                    'flex text-xs justify-start',
                    isMinimal && !isMobile ? 'flex-col h-18' : 'flex-row',
                  )}
                  onClick={() => onClickNavigation(navItem.link)}
                >
                  <navItem.logo
                    size={25}
                    strokeWidth={'1.5px'}
                    className={'m-2'}
                  />
                  <span>{navItem.name}</span>
                </Button>
              </div>
            );
          })}
        </section>
      </ScrollArea>
    </main>
  );
};

export default SideBar;
