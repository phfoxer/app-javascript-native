class ListarNegociacao {
    constructor() {
        this._negociacoes = [];
    }

    adiciona(negociacao) {
        this._negociacoes.push(negociacao);
    }
    // Programação defensiva, utilizando o array vazio concatenado para nao poder alterar a lista
    get negociacoes() {
        return [].concat(this._negociacoes);
    }
}