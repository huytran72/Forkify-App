import View from "./Views";
import icons from 'url:../../img/icons.svg'; // Parcel 2

class ResultsView extends View {
    _parentElement = document.querySelector('.results');
    _errorMessage = 'No recipes found for your query! Please try again.';
    _message = '';

    _generateMarkup() {
        return this._data.map(this._generateMarkupPreview).join('');
    }

    _generateMkarupPreview(result) {
        return `
            <li class="preview">    
                <a class="preview__link preview__link--active" href="#${result.id}">
                    <figure class="preview__fig">
                        <img src="${result.image}" alt="${result.title}" />
                    </figure>
        `;    
    };
};

