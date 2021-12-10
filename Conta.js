export class Conta {
    constructor(tipo, saldoInicial, cliente, agencia) {
        this._tipo = tipo;
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
    }

    set cliente(novoValor) {
        if (novoValor instanceof Cliente) {
            this._cliente = novoValor;
        }
    }

    get cliente() {
        return this._cliente;
    }

    get saldo() {
        return this._saldo;
    }

    sacar(valor) {

        let taxa = 1
        if (this._tipo == "corrente") {
            taxa = 1.1;
        }
        if (this._tipo == "salario") {
            taxa = 1.05;
        }
        if (this._tipo == "empresaria") {
            taxa = 1.15;
        }
        const ValorSacado = taxa * valor;
        if (this._saldo >= ValorSacado) {
            this._saldo -= ValorSacado;
            return valor;
        }
    }

    depositar(valor) {
        if (valor <= 100) {
            return;
        }
        this._saldo += valor;
    }

    tranferir(valor, conta) {

        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);

    }
}