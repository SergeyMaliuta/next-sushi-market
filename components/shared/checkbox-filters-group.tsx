"use client";

import { useState } from "react";
import { FilterChecboxProps, FilterCheckbox } from "./filter-checkbox";
import { Input, Skeleton } from "../ui";

type Item = FilterChecboxProps;

interface Props {
  title: string;
  items: Item[];
  defaultItems?: Item[];
  limit?: number;
  loading?: boolean;
  searchInputPlaceholder?: string;
  onClickCheckbox?: (id: string) => void;
  defaultValue?: string[];
  selected?: Set<string>;
  name?: string;
  className?: string;
}

export const CheckboxFiltersGroup: React.FC<Props> = ({
  className,
  title,
  items,
  defaultItems,
  limit = 5,
  searchInputPlaceholder = "Search...",
  loading,
  onClickCheckbox,
  selected,
  defaultValue,
  name,
}) => {
  const [showAll, setShowAll] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const OnChangeSearchInput = (value: string) => {
    setSearchValue(value);
  };

  if (loading) {
    return (
      <div className={className}>
        <p className="font-boldd mb-3">{title}</p>
        {...Array(limit)
          .fill(0)
          .map((_, index) => (
            <Skeleton key={index} className=" h-6 mb-4 rounded-[8px]" />
          ))}
      </div>
    );
  }

  const list = showAll
    ? items.filter((item) =>
        item.text.toLowerCase().includes(searchValue.toLocaleLowerCase())
      )
    : (defaultItems || items).slice(0, limit);

  return (
    <div className={className}>
      <p className="font-bold mb-3">{title}</p>
      {showAll && (
        <div className="mb-5">
          <Input
            onChange={(e) => OnChangeSearchInput(e.target.value)}
            placeholder={searchInputPlaceholder}
            className="bg-gray-50 border-none"
          />
        </div>
      )}
      <div className="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar">
        {list.map((item) => (
          <FilterCheckbox
            checked={selected?.has(item.value)}
            key={String(item.value)}
            value={item.value}
            text={item.text}
            endAdornment={item.endAdornment}
            onCheckedChange={() => onClickCheckbox?.(item.value)}
            name={name}
          />
        ))}
      </div>

      {items.length > limit && (
        <div className={showAll ? "border-t border-t-neutral-100 mt-4" : ""}>
          <button
            className="text-primary mt-3"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Hide" : "Show all"}
          </button>
        </div>
      )}
    </div>
  );
};
