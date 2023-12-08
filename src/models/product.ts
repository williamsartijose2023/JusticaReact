import { CategoryDTO } from "./category";
export type ProductDTO = {
  id: number;
  name: string;
  subDescription: string;
  description: string;
  time: string ;
  timePerson: string;
  categories: CategoryDTO[];
};
