export class Categories {
    category_id: number;
    category_name: string;
    
    constructor(catId: number, cname:string){
        this.category_id = catId;
        this.category_name = cname;
    }
}