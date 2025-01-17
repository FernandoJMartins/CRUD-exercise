class Clientes {

    private clientes: Array<Cliente>;

    constructor(){
        this.clientes = new Array<Cliente>();
        const conta1 = new Cliente('Paulo', '1234', null);
        const conta2 = new Cliente('Caio', '5423', null);
        const conta3 = new Cliente('Fer', '3612', null);
        this.clientes.push(conta1, conta2, conta3);
    }

    inserir(cliente: Cliente): void {
        console.log("Inserindo cliente:", cliente);
        this.clientes.push(cliente);
        console.log("Lista de clientes atualizada:", this.clientes);
    }

    pesquisar(cpf: string): Cliente{
        return this.clientes.find(
            cliente => cliente.cpf === cpf
        );
    }

    remover(cpf: string): void {
        const clienteARemover = this.pesquisar(cpf);
        if (clienteARemover){
            const indexCliente = this.clientes.indexOf(clienteARemover);

            if (indexCliente > -1){
                this.clientes.splice(indexCliente, 1);
            }
        }
    }

    listar(): Array<Cliente>{
        return this.clientes;
    }
    
}