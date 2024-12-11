import View from "./Views";

class ResultsView extends View {
    _parentElement = document.querySelector('.results');

    _generateMarkup() {
        console.log(this._data);
        return this._data.map(this._generateMarkupPreview).join('');
    }

    _generateMarkupPreview(result) {
        return `
            <li class="preview">
                <a class="preview__link" href="#${result.id}">
                    <figure class="preview__fig">
                        <img src="${image}" alt="${title}" />
                    </figure>
                    <div class="preview__data">
                        <h4 class="preview__title">${title}</h4>
                        <p class="preview__publisher">${publisher}</p>
                    </div>
                </a>
            </li>
        `;
    }
}

export default new ResultsView();