import { Request, Response } from "express";
import { Product } from "../model/product";
import dbProduct from "../config/db/db.product";

const getAll = async (req:Request, res: Response) => {
    
    await dbProduct.selectAll().then(
        products => {
           res.status(200).send({message: 'OK', result: products});
        }
    ).catch(err => {
        res.status(500).send({message: "Database Error", error: err.code
        })
    })
    
}

const getById = async (req: Request, res: Response) => {
    
    await dbProduct.getById(parseInt(req.params.id)).then(
        product => {
            res.status(200).send({message: 'OK', result: product})
        }
    )
    .catch(err => {
        res.status(500).send({message: "DataBase Error", error: err.code})
    })
}

export default {getAll, getById};