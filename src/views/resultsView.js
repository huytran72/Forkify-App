import View from "./Views";

class ResultsView extends View {
    _parentElement = document.querySelector('.results');

    _generateMarkup() {
        return `
            <li class="preview">
        `;
    }
}

export default new ResultsView();