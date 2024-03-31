'use client';

import { DataTable } from '@/components/data-table';
import TableLayout from '@/components/table-layout';
import { Button } from '@/components/ui/button';
import { ColumnDef } from '@tanstack/react-table';
import { Pencil, Trash2 } from 'lucide-react';
import { useCallback, useMemo, useState } from 'react';

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

export const columns: ColumnDef<ICustomer>[] = [
  {
    accessorKey: 'fullName',
    header: 'Họ Tên',
  },
  {
    accessorKey: 'phone',
    header: 'Số Điện Thoại',
  },
  {
    accessorKey: 'email',
    header: 'Email',
  },
  {
    accessorKey: 'createdAt',
    header: 'Ngày Tạo',
  },
  {
    accessorKey: 'countTicket',
    header: () => <div className="text-center">Số Lần mua vé</div>,
    cell: ({ row }) => (
      <div className="text-center">{row.getValue('countTicket')}</div>
    ),
  },
  {
    accessorKey: 'action',
    header: () => <div className="text-center">Action</div>,
    cell: ({ row }) => (
      <div className="flex gap-2 justify-center">
        <Button variant="ghost" className="hover:bg-blue-500 hover:text-white">
          <Pencil />
        </Button>
        <Button variant="ghost" className="hover:bg-red-600 hover:text-white">
          <Trash2 />
        </Button>
      </div>
    ),
  },
];

const CustomerPage = () => {
  const [filterSearch, setFilterSearch] = useState<string>('');

  const customerList = useMemo<ICustomer[]>(() => {
    return dummyData;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterSearch]);

  const onClickSearch = useCallback((filterSearch?: string) => {
    setFilterSearch(filterSearch ?? '');
  }, []);

  return (
    <TableLayout
      title="Khách Hàng"
      placeHolderFilter="Tìm kiếm tên khách hàng"
      onClickSearch={(filterSearch) => onClickSearch(filterSearch)}
    >
      <DataTable columns={columns} data={customerList} />
    </TableLayout>
  );
};

export default CustomerPage;
