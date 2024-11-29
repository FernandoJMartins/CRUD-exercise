class ClienteEspecial extends Cliente {

    private _dependentes: Array<Cliente>;

    constructor(nome:string, cpf:string, conta:Conta){
        super(nome, cpf, conta);
        this._dependentes = [];
    }

    get dependentes(){
        return this._dependentes;
    }
    
    addDependentes(cliente: Cliente) : void{
        this._dependentes.push(cliente);
    }

    removeDependentes(clienteARemover : Cliente) : void {
        const dependentesAntes = this._dependentes.length;
        this._dependentes = this._dependentes.filter(cliente => cliente.cpf !== clienteARemover.cpf);

        if (this._dependentes.length < dependentesAntes) {
            console.log(`Dependente com CPF ${clienteARemover.cpf} removido com sucesso.`);
        } else {
            console.log(`Dependente com CPF ${clienteARemover.cpf} não encontrado.`);
        }
    }
    

    toString(): string {
        const dependentesInfo = this._dependentes.map(dep => dep.toString()).join('\n');
        return `${super.toString()} 
        - Dependentes:
        ${dependentesInfo ? dependentesInfo : 'Nenhum dependente'}`;
    }
}