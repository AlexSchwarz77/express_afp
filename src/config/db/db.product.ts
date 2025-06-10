import { Categories } from "../../model/categories";
import { Product } from "../../model/product";
import { connection } from "./db";

import *  as sub from "./db.suppliers";
import * as cat from "./db.categories";

const selectAll = async (): Promise<Array<Product>> => {
    try {
        const resultsProd = await connection.query("SELECT * FROM product  ORDER BY id ASC");
        const resultsCat = await cat.default.selectAll();
        const resultsSup = await sub.default.selectAll();
        
        resultsProd.forEach(element => {
            console.log(element);
            
        });
        return resultsProd
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
             for(let cat  of product.category) {
                await connection.query(`INSERT INTO product_categories(product_id, category_id) VALUES(${product.id}, ${cat.category_id} )`)
             } 
            return await connection.query(`INSERT INTO product VALUES(${product.id}, '${product.name}', ${product.price})`);
            // alternative
            // return await connection.query(`INSERT INTO product VALUES($1)`, [product]);    
    }catch(err){
        throw err;
    }
}


export default { selectAll, getById, getByName, updateProduct, deleteProduct, createProduct }
