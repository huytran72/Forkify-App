class SearchView {
    _parentElement = document.querySelector('.search');

    getQuery() {
        const query = this._parentElement.querySelector('.search__field').value;
        this.clearInput();
    }

    clearInput() {
        this._parentElement.querySelector('.search__field').value = '';
    }

    addHanderSearch(handler) {
        this._parentElement.addEventListener('submit', function (e) {
            e.preventDefault();
            handler();
        });
    }
};

export default SearchView;










