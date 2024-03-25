'use client';

import TableLayout from '@/components/table-layout';
import { Button } from '@/components/ui/button';
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
      <Table>
        <TableHeader>
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
    </TableLayout>
  );
};

export default CustomerPage;
