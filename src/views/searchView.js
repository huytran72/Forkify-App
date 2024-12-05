class SearchView {
    #parentElement = document.querySelector('.search');

    getQuery() {
        const query = this.#parentElement.querySelector('.search__field').value;
        this.#clearInput();
    }
};

export default SearchView;