class RecipeView {
    #parentElement = document.querySelector('.recipe');

    reder(data) {
        this.#data = data;
    }
}

export default new RecipeView();