import { useSearchParams } from "next/navigation";
import { useSet } from "react-use";
import { useState } from "react";

interface PriceProps {
  priceFrom?: number;
  priceTo?: number;
}

interface QueryFilters extends PriceProps {
  doIt: string;
  ingredients: string;
}

export interface Filters {
  doIt: Set<string>;
  selectedIngredients: Set<string>;
  prices: PriceProps;
}

interface ReturnProps extends Filters {
  setPrices: (name: keyof PriceProps, value: number) => void;
  setDoIt: (value: string) => void;
  setSelectedIngredients: (value: string) => void;
}

export const useFilters = (): ReturnProps => {
  const searchParams = useSearchParams() as unknown as Map<
    keyof QueryFilters,
    string
  >;
  const [selectedIngredients, { toggle: toggleIngredients }] = useSet(
    new Set<string>(searchParams.get("ingredients")?.split(","))
  );
  const [doIt, { toggle: toggleDoIt }] = useSet(
    new Set<string>(
      searchParams.get("doIt") ? searchParams.get("doIt")?.split(",") : []
    )
  );
  const [prices, setPrices] = useState<PriceProps>({
    priceFrom: Number(searchParams.get("priceFrom")) || undefined,
    priceTo: Number(searchParams.get("priceTo")) || undefined,
  });

  const updatePrice = (name: keyof PriceProps, value: number) => {
    setPrices((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return {
    doIt,
    selectedIngredients,
    prices,
    setPrices: updatePrice,
    setDoIt: toggleDoIt,
    setSelectedIngredients: toggleIngredients,
  };
};
