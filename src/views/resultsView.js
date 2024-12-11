import View from "./Views";

class ResultsView extends View {
    _parentElement = document.querySelector('.results');

    _generateMarkup() {
        console.log(this._data);
        return this._data.map(this._generateMarkupPreview).join('');
    }

    _generateMarkupPreview() {
        return `
            <li class="preview">
        `;
    }
}

export default new ResultsView();