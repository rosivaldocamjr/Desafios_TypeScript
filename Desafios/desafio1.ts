// Como podemos rodar isso em um arquivo .ts sem causar erros? 
// let employee = {};
// employee.code = 10;
// employee.name = "John";

// 1ª Forma
let funcionario1 = {
  codigo: 10,
  nome: "João"
}

// 2ª Forma
let funcionario2: { codigo: number, nome: string} = {
  codigo: 10,
  nome: "João"
}

// 3ª Forma
interface Funcionario {
  codigo: number,
  nome: string
}

let funcionario3: Funcionario = {
  codigo: 10,
  nome: "João"
}

// 4ª Forma
let funcionario4 = {} as Funcionario
funcionario4.codigo = 10
funcionario4.nome = "João"