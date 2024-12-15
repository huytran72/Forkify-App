import View from './View.js';
import icons from 'url:../../img/icons.svg'; // Parcel 2

class PaginationView extends View { 
    _parentElement = document.querySelector('.pagination');

    _generateMarkup() {
        const curPage = this._data.page;
        const numPages = Math.ceil(this._data.results.length / this._data.resultsPerPage);

        // Page 1, and there are other pages
            if(curPage === 1 && numPages > 1) {
                return `
                    <button data-goto="${curPage + 1}" class="btn--inline pagination__btn--next">
                        <span>Page ${curPage + 1}</span>
                        <svg class="search__icon">
                            <use href="${icons}#icon-arrow-right"></use>
                        </svg>
                    </button>
                `;
            }
        // Page 1, and there are NO other pages
        if(this._data.page === 1 && numPages >1) {
            return `

            `;
        }

        // Last page
        if(this._data.page === numPages && numPages > 1) {
            return `
                <button data-goto="${this._data.page - 1}" class="btn--inline pagination__btn--prev">
                    <svg class="search__icon">
                        <use href="${icons}#icon-arrow-left"></use>
                    </svg>
                    <span>Page ${this._data.page - 1}</span>
                </button>
            `;
        }


        // Other page
        if(this._data.page < numPages) {
            return `

            `;
        }

        // Page 1, and there are NO other pages
        return '';
        
    }
}

export default new PaginationView();