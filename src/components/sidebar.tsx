/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import React, { useMemo, useState } from 'react';
import Image from 'next/image';
import { BsChevronExpand } from 'react-icons/bs';
import { usePathname, useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';

import { cn } from '@/lib/utils';
import { logo } from '@/assets/exports';
import { NAVIGATION_SIDEBAR } from '@/enums/navigation.enum';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { ScrollArea } from '@/components/ui/scroll-area';
import { changeMinimal } from '@/lib/features/sidebar-slice';
import { AppDispatch, useAppSelector } from '@/lib/store';

interface PropSideBar {
  isMobile?: boolean;
}

const SideBar = ({ isMobile = false }: PropSideBar) => {
  const [expandChilds, setExpandChilds] = useState<string[]>([]);
  const router = useRouter();
  const pathname = usePathname();

  const dispatch = useDispatch<AppDispatch>();
  const isMinimal = useAppSelector((state) => state.sideBarReducer.isMinimal);

  useMemo(() => {
    setExpandChilds(() => {
      const newArr: string[] = [];
      NAVIGATION_SIDEBAR.forEach((navItem) => {
        if (navItem.expand) newArr.push(navItem.nameGroup);
      });
      return [...newArr];
    });
  }, [isMinimal]);

  const onClickMinimal = () => {
    dispatch(changeMinimal());
  };

  const onClickNavigation = (link: string) => {
    router.push(link);
  };

  const onClickExpandChild = (nameGroup: string) => {
    setExpandChilds((prevItems) => {
      if (prevItems.includes(nameGroup)) {
        const newArr = prevItems.filter((item) => item !== nameGroup);
        return newArr;
      } else {
        return [...prevItems, nameGroup];
      }
    });
  };

  return (
    <main
      className={cn(
        isMobile ? 'block' : 'hidden',
        isMobile
          ? 'border-none'
          : 'border-r-[1px] border-dashed sticky top-0 left-0 h-screen z-50',
        isMinimal && !isMobile ? 'lg:w-[135px]' : 'lg:w-[300px]',
        'lg:block',
      )}
    >
      <div className="logo flex justify-around items-center relative">
        <Image
          src={logo}
          width={100}
          height={100}
          alt="Logo Admin Booking Ticket"
        />
        <BsChevronExpand
          onClick={onClickMinimal}
          size={25}
          strokeWidth={'0'}
          className={cn(
            'cursor-pointer border-none rotate-90 absolute',
            isMinimal && !isMobile ? 'right-[-10%]' : 'right-[-5%]',
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
        {NAVIGATION_SIDEBAR.map((navItem) => {
          return (
            <section
              key={navItem.nameGroup}
              className="flex justify-center flex-col m-2 gap-2"
            >
              <Accordion type="multiple" value={expandChilds}>
                <AccordionItem
                  className="border-none"
                  value={navItem.nameGroup}
                >
                  <AccordionTrigger
                    className={cn(
                      'h-1 hover:no-underline text-xs h-5',
                      isMinimal && !isMobile ? 'hidden' : 'flex',
                    )}
                    onClick={() => onClickExpandChild(navItem.nameGroup)}
                  >
                    <span>{navItem.nameGroup}</span>
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-2 p-0 m-0">
                    {navItem.children.map((child) => {
                      return (
                        <Button
                          variant="outline"
                          key={`${navItem.nameGroup}_${child.name}`}
                          className={cn(
                            'flex text-xs justify-start',
                            isMinimal && !isMobile
                              ? 'flex-col h-18'
                              : 'flex-row',
                            pathname.includes(child.link)
                              ? 'bg-green-500 text-white hover:bg-green-500 hover:text-white'
                              : '',
                          )}
                          onClick={() => onClickNavigation(child.link)}
                        >
                          <child.logo
                            size={25}
                            strokeWidth={'1.5px'}
                            className={'m-2'}
                          />
                          <span>{child.name}</span>
                        </Button>
                      );
                    })}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </section>
          );
        })}
      </ScrollArea>
    </main>
  );
};

export default SideBar;
