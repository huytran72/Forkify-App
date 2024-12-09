import View from "./Views";

class ResultsView extends View {
    _parentElement = document.querySelector('.results');

    _generateMarkup() {
        return this._data.map(this._generateMarkupPreview).join('');
    }
}

export default new ResultsView();