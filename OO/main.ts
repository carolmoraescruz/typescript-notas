import { Estudante } from "./estudante";
import { IRepositoryBase } from "./irepositorybase";
import { Pessoa } from "./pessoa";
import { PessoaRepository } from "./pessoarepository";

let pessoa = new Pessoa('Caroline');
pessoa.showPessoa();

let estudante = new Estudante('Eduardo');
estudante.showPessoa();

let pessoaRepo: IRepositoryBase = new PessoaRepository;
pessoaRepo.insert(pessoa);
pessoaRepo.insert(estudante);