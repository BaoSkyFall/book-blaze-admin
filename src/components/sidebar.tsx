/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import React, { useMemo, useState } from 'react';
import Image from 'next/image';
import { BsChevronExpand } from 'react-icons/bs';
import { usePathname, useRouter } from 'next/navigation';

import { cn } from '@/lib/utils';
import { logo } from '@/assets/exports';
import { NAVIGATION_SIDEBAR } from '@/enums/navigation.enum';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';

interface PropSideBar {
  isMobile?: boolean;
}

const SideBar = ({ isMobile = false }: PropSideBar) => {
  const router = useRouter();
  const pathname = usePathname();

  const [isMinimal, setIsMinimal] = useState<boolean>(false);
  const [expandChilds, setExpandChilds] = useState<string[]>([]);

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
    setIsMinimal((prevItems) => !prevItems);
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
        isMinimal ? 'lg:w-[120px]' : 'lg:w-[300px]',
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
            isMinimal ? 'right-[-10%]' : 'right-[-5%]',
            isMobile ? 'hidden' : 'block',
          )}
        />
      </div>
      <div className="navigation ">
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
                      isMinimal ? 'hidden' : 'flex',
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
                            isMinimal ? 'flex-col h-18' : 'flex-row',
                            pathname.includes(child.link)
                              ? 'bg-green-500 text-white'
                              : '',
                          )}
                          style={{ transition: 'width 1s' }}
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
      </div>
    </main>
  );
};

export default SideBar;
