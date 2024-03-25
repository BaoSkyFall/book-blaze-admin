'use client';

import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Plus, Search } from 'lucide-react';
import { ScrollArea } from './ui/scroll-area';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from './ui/pagination';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { cn } from '@/lib/utils';

interface PropsTableLayout {
  title?: string;
  children: React.ReactNode;
  placeHolderFilter?: string;
  onClickSearch?: (filterSearch?: string) => void;
  className?: string;
}

const TableLayout = ({
  title,
  children,
  placeHolderFilter,
  onClickSearch,
  className,
}: PropsTableLayout) => {
  const [filterSearch, setFilterSearch] = useState<string>('');

  return (
    <section
      className={cn(
        `p-5 rounded-md box-shadow mt-2 ${className ?? ''}`,
        `dark:border`,
      )}
    >
      <span className="text-2xl font-bold">{title ?? ''}</span>
      <div id="header" className="flex justify-between mt-2">
        <div id="filter" className="flex relative">
          <Input
            type="text"
            value={filterSearch}
            onChange={(e) => setFilterSearch(e.target.value)}
            placeholder={placeHolderFilter}
            className="pr-[55px] focus:border-0"
          />
          <Button
            variant="default"
            className="absolute right-0"
            onClick={() => onClickSearch && onClickSearch(filterSearch)}
          >
            <Search width={20} height={20} />
          </Button>
        </div>
        <div id="buttons" className="flex gap-2">
          <Button variant="default" className="">
            <Plus /> Add
          </Button>
          <Button variant="default">CSV</Button>
        </div>
      </div>
      <div id="body" className="mt-2">
        <ScrollArea className="h-[calc(100vh-250px)] mr-2">
          {children}
        </ScrollArea>
        <div id="pagination" className="flex justify-between">
          <div id="page-size" className="flex gap-2 items-center">
            <span className="text-sm text-nowrap">
              Showing 51 to 301 of 133 entries
            </span>
            <Select defaultValue={'50'}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="20">20</SelectItem>
                  <SelectItem value="50">50</SelectItem>
                  <SelectItem value="100">100</SelectItem>
                  <SelectItem value="200">200</SelectItem>
                  <SelectItem value="500">500</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <Pagination className="justify-end">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </section>
  );
};

export default TableLayout;
