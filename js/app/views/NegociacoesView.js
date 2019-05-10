class NegociacoesView {

    constructor(element) {
        this._element = element;
    }

    _template(list) {
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
            </thead>
            <tbody>
        ${ list.map(item =>
            `<tr>
                <td>${ new Date(item.data).toLocaleDateString()}</td>
                <td>${ item.quantidade}</td>
                <td>${ item.valor}</td>
                <td>${ item.volume}</td>
            </tr>`
        ).join('')}
            </tbody>
            <tfoot>
                <tr>
                    <td colspan="3">Voluma total.</td>
                    <td>${ list.reduce((total, n) => total + n.volume, 0.0)}</td>
                </tr>
            </tfoot>
        </table>`;
    }

    update(list) {
        return this._element.innerHTML = this._template(list);
    }
}