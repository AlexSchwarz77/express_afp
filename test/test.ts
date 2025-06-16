import { createPool, Pool } from "mariadb";
import { connection } from "../src/config/db/db";
import { Categories } from "../src/model/categories";
import dbProduct from "../src/config/db/db.product";

// let conn2: Pool = createPool({host: 'localhost', port: 3306, user: 'root', password: '', database: 'products_db'});
let cat = {
  category_id: 1,
  category_name: "string",
};

let counter: number = 0;

// function dbTest(conn: Pool){
//     try{
//         if(conn.toString() === conn2.toString()){

//             console.log("connections are equal");

//         }else{
//             console.log("❌ Fail");
//         }

//     }catch(e){
//         console.error("❌ " + e.stack);
//     }
// }

function isCatEqual(cat1: Object, cat2: Object) {
  for (let k in cat1) {
    if (cat1[k] === cat2[k]) {
      console.log("equal ", cat1[k], cat2[k]);
    }
  }
}

async function isDbEntryEqual(obj: any, fn: any) {
  let func;
  counter == 0 ? (func = await fn) : (func = fn);

  connection.end();

  typeof obj === typeof func
    ? console.log("Beide sind vom selben Typ")
    : console.log("kein Fall trifft zu");

  console.log(Array.isArray(func) + " hallo");
  if (Array.isArray(func)) {
    if (
      (func.length == 0 || func.length > 1) &&
      (obj.length == 0 || obj.length > 1)
    ) {
      console.log("Der Parameter ist kein einzelnes Object");
    } else {
      for (let k in obj) {
        if (obj[k] === func[0][k] || typeof obj[k] === "object") {
          console.log("equal ", obj[k], func[0][k]);
          if (typeof obj[k] === "object") {
            isDbEntryEqual(obj[k], func[0][k]);
          }
        } else {
          console.log(func[0].price, obj.price);

          throw new Error("Error at db entry");
        }
      }
    }
  } else {
    if (
      (func.length == 0 || func.length > 1) &&
      (obj.length == 0 || obj.length > 1)
    ) {
      console.log("Der Parameter ist kein einzelnes Object");
    } else {
      for (let k in obj) {
        if (obj[k] === func[k] || typeof obj[k] === "object") {
          console.log("equal ", obj[k], func[k]);
          if (typeof obj[k] === "object") {
            isDbEntryEqual(obj[k], func[k]);
          }
        } else {
          throw new Error("Error at db entry");
        }
      }
    }
  }
  counter = 1;
  console.log("Testdurchlauf beendet");
}

// dbTest(connection);
// isCatEqual(cat, new Categories(1, "string"));
isDbEntryEqual({ id: 2, name: "blaubeere", price: 2.99 }, dbProduct.getById(2));
