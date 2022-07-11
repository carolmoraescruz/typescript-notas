import { IRepositoryBase } from "./irepositorybase";
import { Pessoa } from "./pessoa";

export class PessoaRepository implements IRepositoryBase {
    
    insert(pessoa: Pessoa): boolean {
        console.log("Inserindo pessoa .........", pessoa.toString());
        return true;
    }
    update(pessoa: Pessoa): boolean {
        console.log("Atualizando pessoa .........", pessoa.toString());
        return true;
    }
    delete(object: number): boolean {
        console.log("Deletando pessoa .........");
        return true;
    }
    findById(object: number) {
        return null;
    }
    findAll(): [any] {
        return [new Pessoa('José')];
    }
    
}