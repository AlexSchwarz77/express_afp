import { Suppliers } from "../../model/suppliers";
import { connection } from "./db";



const selectAll = async (): Promise<Array<Suppliers>> => {
    try {
        return await connection.query("SELECT * FROM suppliers");
    } catch (err) {
        throw err;
    }
}

const getById = async (id: number): Promise<Suppliers> => {
    try {
        return await connection.query(`SELECT * FROM suppliers WHERE id=${id}`);
    } catch (err) {
        throw err;
    }
}

const getByName = async (name: string): Promise<Suppliers> => {
    try{
        return await connection.query(`SELECT * FROM suppliers WHERE name LIKE '%${name}%'`);
    }catch(err){
        throw err;
    }
}

const updateCategories = async (id: number, spaltenName: string, wert: any): Promise<any> => {
    try {
        return await connection.query(`Update suppliers SET ${spaltenName}=${wert} WHERE id=${id}`);
    } catch (err) {
        throw err;
    }
}

const deleteCategories = async (id:number): Promise<any> =>{
    try{
        return await connection.query(`DELETE from suppliers WHERE id=${id}`);
    }catch(err){
        throw err;
    }
}

const createCategory = async (supplier: Suppliers): Promise<Suppliers> => {
    try{

            return await connection.query(`INSERT INTO suppliers VALUES('${supplier.supplier_name}', '${supplier.supplier_street}', '${supplier.supplier_postalcode}', '${supplier.supplier_city}', '${supplier.supplier_country}')`);
            // alternative
            // return await connection.query(`INSERT INTO product VALUES($1)`, [product]);
          
    }catch(err){
        throw err;
    }
}

export default { selectAll, getById, getByName, updateCategories, deleteCategories, createCategory }