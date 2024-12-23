import icons from 'url:../../img/icons.svg';

export default class View {
    _data;
    render(data){
        if(!data || (Array.isArray(data) && data.length === 0)) return this.renderError();


        this._data = data;
        const markup = this._generateMarkup();
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }

    update(data){
        if(!data || (Array.isArray(data) && data.length === 0)) return this.renderError();

        this._data = data;
        const newMarkup = this._generateMarkup();

        const newDOM = document.createRange().createContextualFragment(newMarkup);
        const newElements = Array.from(newDOM.querySelectorAll('*'));
        const curElements = Array.from(this._parentElement.querySelectorAll('*'));
        console.log(curElements);
        console.log(newElements);

        newElements.forEach((newEl, i) => {
            const curEl = curElements[i];
            console.log(curEl, newEl.isEqualNode(curEl));
            
            // Updates changed TEXT
            if(!newEl.isEqualNode(curEl) && newEl.firstChild?.nodeValue.trim() !== ''){
                curEl.textContent = newEl.textContent;
            } 

            // Updates changed ATTRIBUTES
            if(!newEl.isEqualNode(curEl)){
                Array.from(newEl.attributes).forEach(attr => curEl.setAttribute(attr.name, attr.value));
            }
        });
    };

    _clear(){
        console.log(this._parentElement);
        this._parentElement.innerHTML = '';
    }

    renderSpinner() {
        const markjup = `
            <div class="spinner">
                <svg>
                    <use href="${icons}#icon-loader"></use>
                </svg>
            </div>
        `;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }

    renderError(message = this._errorMessage) {
        const markup = `
            <div class="error">
                <div>
                    <svg>
                        <use href="${icons}#icon-alert-triangle"></use>
                    </svg>
                </div>
                <p>${message}</p>
            </div>
        `;
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }
}