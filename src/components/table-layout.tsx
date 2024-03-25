'use client';

import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Plus, Search } from 'lucide-react';

interface PropsTableLayout {
  title?: string;
  children: React.ReactNode;
  placeHolderFilter?: string;
  onClickSearch?: (filterSearch?: string) => void;
}

const TableLayout = ({
  title,
  children,
  placeHolderFilter,
  onClickSearch,
}: PropsTableLayout) => {
  const [filterSearch, setFilterSearch] = useState<string>('');

  return (
    <section>
      <span className="text-2xl font-bold">{title ?? ''}</span>
      <div id="header" className="flex justify-between mt-2">
        <div id="filter" className="flex relative">
          <Input
            type="text"
            value={filterSearch}
            onChange={(e) => setFilterSearch(e.target.value)}
            placeholder={placeHolderFilter}
            className="pr-[55px]"
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
        {children}
      </div>
    </section>
  );
};

export default TableLayout;
