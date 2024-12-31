import { async } from 'regenerator-runtime';
import { API_URL, RES_PER_PAGE } from './config.js';
import { getJSON } from './helpers.js';
import { sendJSON } from '../views/helpers.js';


export const state = {
    recipe: {},
    search: {
        query: '',
        results: [],
        page: 1,
        resultsPerPage: RES_PER_PAGE,       
    },
    bookmarks: [],
} 

const createRecipeObject = function(data) {
    const { recipe } = data.data;    

    return {
        id: recipe.id,
        title: recipe.title,
        publisher: recipe.publisher,
        sourceUrl: recipe.source_url,
        image: recipe.image_url,
        servings: recipe.servings,
        cookingTime: recipe.cooking_time,
        ingredients: recipe.ingredients,        
    };
};

export const loadRecipe = async function(id) {
    try {
        const data = await getJSON(`${API_URL}/${id}`);
        state.recipe = createRecipeObject(data);

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

        if(state.bookmarks.some(bookmark => bookmark.id === id)) recipe.bookmarked = true;
        else recipe.bookmarked = false;

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

        state.search.page = 1;
    } catch (err) {
        console.error(`${err}`);
        throw err;
    }
};

export const getSearchResultsPage = function(page = state.search.page) { 
    state.search.page = page;

    const start = (page - 1) * state.search.resultsPerPage;
    const end = page * state.search.resultsPerPage;

    return state.search.results.slice(start, end);
};

export const updateServings = function(newServings) {
    state.recipe.ingredients.forEach(ing => {
        ing.quantity = (ing.quantity * newServings) / state.recipe.servings;    
    });

    state.recipe.servings = newServings;
};

const persistBookmarks = function() {
    localStorage.setItem('bookmarks', JSON.stringify(state.bookmarks));
};

export const bookmarkRecipe = function(recipe) {
    // Add bookmark
    state.bookmarks.push(recipe);

    // Mark current recipe as bookmarked
    if(recipe.id === state.recipe.id) state.recipe.bookmarked = true;

    persistBookmarks();
};


export const deleteBookmark = function(id) {
    // Delete bookmark    
    const index = state.bookmarks.findIndex(el => el.id === id);
    state.bookmarks.splice(index, 1);

    // Mark current recipe as NOT bookmarked
    if(id === state.recipe.id) state.recipe.bookmarked = false;

    persistBookmarks();
};

const init = function() {
    const storage = localStorage.getItem('bookmarks');    
    if(storage) state.bookmarks = JSON.parse(storage);
};
init();
console.log(state.bookmarks);

const clearBookmarks = function() {
    localStorage.clear('bookmarks');    
};
clearBookmarks();

export const uploadRecipe = async function(newRecipe) {
    try {
    const ingredients = Object.entries(newRecipe).filter(entry => entry[0].startsWith('ingredient') && entry[1] !== '').map(ing => {        
        const ingArr = ing[1].split(',').map(el => el.trim());
        if(ingArr.length !== 3) throw new Error('Wrong ingredient format! Please use the correct format :)');
        const [quantity, unit, description] = ingArr;
        return { quantity: quantity ? +quantity : null, unit, description };
    });
    

    const recipe = {
        title: newRecipe.title,
        source_url: newRecipe.sourceUrl,
        image_url: newRecipe.image,
        publisher: newRecipe.publisher,
        cooking_time: +newRecipe.cookingTime,
        servings: +newRecipe.servings,
        ingredients,
    };

    const data = await sendJSON(`${API_URL}?key=${KEY}`, recipe);
    
    } catch (err) {
        throw err;
}
};