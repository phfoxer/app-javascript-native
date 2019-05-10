class NegociacaoController {
    
    constructor() {
        this.$ = document.querySelector.bind(document);
        this._listarNegociacoes = new ListarNegociacao();
        this._negociacoesView = new NegociacoesView(this.$('#negociacoesView'));
        this._listView();
    }

    adicionar(event) {
        this._data = this.$('#data').value;
        this._quantidade = this.$('#quantidade').value;
        this._valor =this.$('#valor').value;
        let negociacao = new Negociacao(
            DateHelper.stringToDate(this._data),
            this._quantidade,
            this._valor
        );
        this._listarNegociacoes.adiciona(negociacao);
        this._listView();
        event.preventDefault();
    }

    _listView(){
        this._negociacoesView.update(this._listarNegociacoes.negociacoes);
    }

}