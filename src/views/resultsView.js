import View from "./Views";

class ResultsView extends View {
    _parentElement = document.querySelector('.results');

    _generateMarkup() {
        return `
            <li class="preview">
                <a class="preview__link preview__link--active" href="#${this._data.id}">
        `;
    }
}

export default new ResultsView();