class RecipeView {
    #parentElement = document.querySelector('.recipe');
    #data;

    reder(data) {
        this.#data = data;
    }
}

export default new RecipeView();