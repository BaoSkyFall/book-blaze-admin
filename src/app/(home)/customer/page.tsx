'use client';

import TableLayout from '@/components/table-layout';
import { Button } from '@/components/ui/button';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Pencil, Trash2 } from 'lucide-react';
import React, { useEffect, useMemo, useState } from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';

interface ICustomer {
  id: number;
  fullName: string;
  phone: string;
  email: string;
  createdAt: string;
  countTicket: number;
}

const dummyData = [
  {
    id: 1,
    fullName: 'Trần Đình A',
    phone: '0121315644',
    email: 'trandinha@gmail.com',
    createdAt: '27/03/2017',
    countTicket: 19,
  },
  {
    id: 2,
    fullName: 'Trần Đình B',
    phone: '0121315644',
    email: 'trandinha@gmail.com',
    createdAt: '27/03/2017',
    countTicket: 19,
  },
  {
    id: 3,
    fullName: 'Trần Đình C',
    phone: '0121315644',
    email: 'trandinha@gmail.com',
    createdAt: '27/03/2017',
    countTicket: 19,
  },
  {
    id: 4,
    fullName: 'Trần Đình C',
    phone: '0121315644',
    email: 'trandinha@gmail.com',
    createdAt: '27/03/2017',
    countTicket: 19,
  },
  {
    id: 5,
    fullName: 'Trần Đình C',
    phone: '0121315644',
    email: 'trandinha@gmail.com',
    createdAt: '27/03/2017',
    countTicket: 19,
  },
  {
    id: 6,
    fullName: 'Trần Đình C',
    phone: '0121315644',
    email: 'trandinha@gmail.com',
    createdAt: '27/03/2017',
    countTicket: 19,
  },
  {
    id: 7,
    fullName: 'Trần Đình C',
    phone: '0121315644',
    email: 'trandinha@gmail.com',
    createdAt: '27/03/2017',
    countTicket: 19,
  },
  {
    id: 8,
    fullName: 'Trần Đình C',
    phone: '0121315644',
    email: 'trandinha@gmail.com',
    createdAt: '27/03/2017',
    countTicket: 19,
  },
  {
    id: 9,
    fullName: 'Trần Đình C',
    phone: '0121315644',
    email: 'trandinha@gmail.com',
    createdAt: '27/03/2017',
    countTicket: 19,
  },
  {
    id: 10,
    fullName: 'Trần Đình C',
    phone: '0121315644',
    email: 'trandinha@gmail.com',
    createdAt: '27/03/2017',
    countTicket: 19,
  },
  {
    id: 11,
    fullName: 'Trần Đình C',
    phone: '0121315644',
    email: 'trandinha@gmail.com',
    createdAt: '27/03/2017',
    countTicket: 19,
  },
  {
    id: 12,
    fullName: 'Trần Đình C',
    phone: '0121315644',
    email: 'trandinha@gmail.com',
    createdAt: '27/03/2017',
    countTicket: 19,
  },
  {
    id: 13,
    fullName: 'Trần Đình C',
    phone: '0121315644',
    email: 'trandinha@gmail.com',
    createdAt: '27/03/2017',
    countTicket: 19,
  },
  {
    id: 14,
    fullName: 'Trần Đình C',
    phone: '0121315644',
    email: 'trandinha@gmail.com',
    createdAt: '27/03/2017',
    countTicket: 19,
  },
  {
    id: 15,
    fullName: 'Trần Đình C',
    phone: '0121315644',
    email: 'trandinha@gmail.com',
    createdAt: '27/03/2017',
    countTicket: 19,
  },
  {
    id: 16,
    fullName: 'Trần Đình C',
    phone: '0121315644',
    email: 'trandinha@gmail.com',
    createdAt: '27/03/2017',
    countTicket: 19,
  },
] as ICustomer[];

const CustomerPage = () => {
  const [filterSearch, setFilterSearch] = useState<string>('');

  const customerList = useMemo<ICustomer[]>(() => {
    return dummyData;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterSearch]);

  const onClickSearch = (filterSearch?: string) => {
    setFilterSearch(filterSearch ?? '');
  };

  return (
    <TableLayout
      title="Khách Hàng"
      placeHolderFilter="Tìm kiếm tên khách hàng"
      onClickSearch={(filterSearch) => onClickSearch(filterSearch)}
    >
      <ScrollArea className="h-[calc(100vh-200px)] mr-2">
        <Table className="relative">
          <TableHeader className="sticky top-0">
            <TableRow>
              <TableHead>Họ Tên</TableHead>
              <TableHead className="w-[200px]">Số Điện Thoại</TableHead>
              <TableHead className="w-[300px]">Email</TableHead>
              <TableHead className="w-[200px]">Ngày Tạo</TableHead>
              <TableHead className="w-[200px]">Số lần mua vé</TableHead>
              <TableHead className="w-[200px]">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="border-b-0">
            {customerList.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.fullName}</TableCell>
                <TableCell>{item.phone}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.createdAt}</TableCell>
                <TableCell>{item.countTicket}</TableCell>
                <TableCell className="flex gap-2">
                  <Button
                    variant="ghost"
                    className="hover:bg-blue-500 hover:text-white"
                  >
                    <Pencil />
                  </Button>
                  <Button
                    variant="ghost"
                    className="hover:bg-red-600 hover:text-white"
                  >
                    <Trash2 />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </ScrollArea>
      <Pagination className="justify-end">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" title="<" />
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
    </TableLayout>
  );
};

export default CustomerPage;
