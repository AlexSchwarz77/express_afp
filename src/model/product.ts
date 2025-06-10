import { Categories } from "./categories";
import { Suppliers } from "./suppliers";

export interface Product{
    id: Number;
    name: string;
    price:Number;
    category: Array<Categories>;
    supplier: Array<Suppliers>;
}