import qs from "qs";
import { useEffect } from "react";
import { Filters } from "./use-filters";
import { useRouter } from "next/navigation";

export const useQueryFilter = (filters: Filters) => {
  const router = useRouter();
  useEffect(() => {
    const params = {
      ...filters.prices,
      ingredients: Array.from(filters.selectedIngredients),
      doIt: Array.from(filters.doIt),
    };

    const query = qs.stringify(params, { arrayFormat: "comma" });
    router.push(`/?${query}`, { scroll: false });
  }, [filters, router]);
};
