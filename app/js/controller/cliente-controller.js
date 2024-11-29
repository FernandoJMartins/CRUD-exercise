class clienteController {
    constructor() {
        this.inputNome = document.querySelector('#nome');
        this.inputCpf = document.querySelector('#cpf');
        this.clientes = new Clientes();
    }
    inserir(e) {
        e.preventDefault();
        let newCli = new Cliente(this.inputNome.value, this.inputCpf.value, null);
        this.clientes.inserir(newCli);
        this.inserirClienteNoHTML(newCli);
    }
    listar() {
        this.clientes.listar().forEach(cliente => {
            this.inserirClienteNoHTML(cliente);
        });
    }
    inserirClienteNoHTML(cliente) {
        const elementoP = document.createElement('p');
        elementoP.textContent = cliente.toString();
        const botaoApagar = document.createElement('button');
        botaoApagar.textContent = 'X';
        botaoApagar.addEventListener('click', (event) => {
            console.log('removendo cliente ' + cliente.toString());
            this.clientes.remover(cliente.cpf);
            event.target.parentElement.remove();
        });
        elementoP.appendChild(botaoApagar);
        document.body.appendChild(elementoP);
    }
    pesquisar() {
        let cpf = this.inputCpf.value;
        this.clientes.pesquisar(cpf);
    }
}
