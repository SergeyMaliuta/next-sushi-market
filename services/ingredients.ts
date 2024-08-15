import { axiosInstance } from "./instance";

import { Ingredient } from "@prisma/client";
import { ApiRoutes } from "./routes";

export const getAll = async (): Promise<Ingredient[]> => {
  return (await axiosInstance.get<Ingredient[]>(ApiRoutes.INGREDIENTS)).data;
};
