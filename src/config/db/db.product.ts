import { Product } from "../../model/product";
import { connection } from "./db";

const selectAll = async (): Promise<Array<Product>> => {
    try {
        return await connection.query("SELECT * FROM product");
    } catch (err) {
        throw err;
    }
}

const getById = async (id: number): Promise<Product> => {
    try{
        return await connection.query(`SELECT * FROM product WHERE id=${id}`);
    }catch(err){
        throw err;
    }
}


export default { selectAll, getById }
