export interface IRepositoryBase {

    insert(object:any): boolean;
    update(object:any): boolean;
    delete(object:number): boolean;
    findById(object:number): any;
    findAll(): [any];

}