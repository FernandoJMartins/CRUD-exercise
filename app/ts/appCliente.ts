let Controller = new clienteController();

Controller.listar();

const conta1 = new Cliente('Paulo', '1234', null);
const conta2 = new Cliente('Caio', '5423', null);
const conta3 = new Cliente('Fer', '3612', null);

console.log('Conta: ' + conta1);
console.log('Conta: ' + conta2);
console.log('Conta: ' + conta3);


const clienteEspecial = new ClienteEspecial('clienteEspecial', '1111', null);

clienteEspecial.addDependentes(conta1);
console.log('adicionando dependente');
console.log('clienteEspecial: ' + clienteEspecial);

console.log('removendo dependente');
clienteEspecial.removeDependentes(conta1);


console.log('clienteEspecial: ' + clienteEspecial);