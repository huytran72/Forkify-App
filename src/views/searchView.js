class SearchView {
    #parentElement = document.querySelector('.search');

    getQuery() {
        return this.#parentElement.querySelector('.search__field').value;
    }

    clearInput() {
        
    }

    addHanderSearch(handler) {
        this.#parentElement.addEventListener('submit', function (e) {
            e.preventDefault();
            handler();
        });
    }
};

export default SearchView;