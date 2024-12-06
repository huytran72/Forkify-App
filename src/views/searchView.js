class SearchView {
    #parentElement = document.querySelector('.search');

    getQuery() {
        return this.#parentElement.querySelector('.search__field').value;
    }

    addHanderSearch(handler) {
        
    }
};

export default SearchView;