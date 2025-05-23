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
    try {
        return await connection.query(`SELECT * FROM product WHERE id=${id}`);
    } catch (err) {
        throw err;
    }
}

const getByName = async (name: string): Promise<Product> => {
    try{
        return await connection.query(`SELECT * FROM product WHERE name LIKE '%${name}%'`);
    }catch(err){
        throw err;
    }
}

const updateProduct = async (id: number, spaltenName: string, wert: any): Promise<any> => {
    try {
        return await connection.query(`Update product SET ${spaltenName}=${wert} WHERE id=${id}`);
    } catch (err) {
        throw err;
    }
}

const deleteProduct = async (id:number): Promise<any> =>{
    try{
        return await connection.query(`DELETE from product WHERE id=${id}`);
    }catch(err){
        throw err;
    }
}

const createProduct = async (product: Product): Promise<Product> => {
    try{
        const stmt: Array<Product> = await connection.query(`SELECT * FROM product WHERE id in (${product.id})`);
        if(stmt.length == 0){
            return await connection.query(`INSERT INTO product VALUES(${product.id}, '${product.name}', ${product.price})`);
            // alternative
            // return await connection.query(`INSERT INTO product VALUES($1)`, [product]);
        }else{
            throw new Error("Id ist bereits vorhanden");
        }    
    }catch(err){
        throw err;
    }
}


export default { selectAll, getById, getByName, updateProduct, deleteProduct, createProduct }
