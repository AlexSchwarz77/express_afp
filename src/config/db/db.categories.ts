import { Categories } from "../../model/categories";
import { connection } from "./db";



const selectAll = async (): Promise<Array<Categories>> => {
    try {
        return await connection.query("SELECT * FROM categories");
    } catch (err) {
        throw err;
    }
}

const getById = async (id: number): Promise<Categories> => {
    try {
        return await connection.query(`SELECT * FROM categories WHERE id=${id}`);
    } catch (err) {
        throw err;
    }
}

const getByName = async (name: string): Promise<Categories> => {
    try{
        return await connection.query(`SELECT * FROM categories WHERE name LIKE '%${name}%'`);
    }catch(err){
        throw err;
    }
}

const updateCategories = async (id: number, spaltenName: string, wert: any): Promise<any> => {
    try {
        return await connection.query(`Update categories SET ${spaltenName}=${wert} WHERE id=${id}`);
    } catch (err) {
        throw err;
    }
}

const deleteCategories = async (id:number): Promise<any> =>{
    try{
        return await connection.query(`DELETE from categories WHERE id=${id}`);
    }catch(err){
        throw err;
    }
}

const createCategory = async (category: Categories): Promise<Categories> => {
    try{

            return await connection.query(`INSERT INTO product VALUES('${category.category_name}')`);
            // alternative
            // return await connection.query(`INSERT INTO product VALUES($1)`, [product]);
          
    }catch(err){
        throw err;
    }
}

export default { selectAll, getById, getByName, updateCategories, deleteCategories, createCategory }