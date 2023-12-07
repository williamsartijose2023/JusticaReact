import { CategoryDTO } from "./category";
export type ProductDTO = {
  id: number;
  name: string;
  description: string;
  time: string ;
  imgUrl: string;
  categories: CategoryDTO[];
};