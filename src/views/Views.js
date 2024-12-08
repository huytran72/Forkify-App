export default class View {
    _data;
    render(data){
        this._data = data;
        const markup = this._generateMarkup();
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }

    _clear(){
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
    }
}