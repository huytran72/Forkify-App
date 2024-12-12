import { async } from 'regenerator-runtime';
import { API_URL, RES_PER_PAGE } from './config.js';
import { getJSON } from './helpers.js';


export const state = {
    recipe: {},
    search: {
        query: '',
        results: [],
        page: 1,
        resultsPerPage: RES_PER_PAGE,       
    }
} 

export const loadRecipe = async function(id) {
    try {
        const data = await getJSON(`${API_URL}/${id}`);

        const { recipe } = data.data;
        recipe = {
            id: recipe.id,
            title: recipe.title,
            publisher: recipe.publisher,
            sourceUrl: recipe.source_url,
            image: recipe.image_url,
            servings: recipe.servings,
            cookingTime: recipe.cooking_time,
            ingredients: recipe.ingredients,
        }; 

        console.log(state.recipe);
    } catch (err) {
        console.error(`${err}`);
        throw err;
    }
}

export const loadSearchResults = async function(query) {
    try {
        state.search.query = query;

        const data = await getJSON(`${API_URL}?search=${query}`);  
        console.log(data);         

        state.search.resuits = data.data.recipes.map(rec => {
            return {
                id: rec.id,
                title: rec.title,
                publisher: rec.publisher,
                image: rec.image_url,
            };
        });

        console.log(state.search.results);
    } catch (err) {
        console.error(`${err}`);
        throw err;
    }
};

export const getSearchResultsPage = function(page = state.search.page) { 
    
};
