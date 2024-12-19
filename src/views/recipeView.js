import View from './View.js';

import icons from 'url:../../img/icons.svg'; // Parcel 1
import { Fraction } from 'fractional';


class RecipeView extends View {
    _parentElement = document.querySelector('.recipe');
    _data;
    _errorMessage = 'We could not find that recipe. Please try another one!';
    _message = '';

    addHandlerRender(handler) {
        ['hashchange', 'load'].forEach(ev => window.addEventListener(ev, handler));
    };

    addHandlerUpdateServings(handler) {
        this._parentElement.addEventListener('click', function(e) {
    };

    reder(data) {
        this._data = data;
        const markup = this._generateMarkup();
        this._clear();
        recipeContainer.innerHTML = '';
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }

    _clear() {
        this._parentElement.innerHTML = '';
    }

    renderSpinner = function() {
        const markup = `
            <div class="spinner">
                <svg>
                    <use href="src/img/icons.svg#icon-loader"></use>
                </svg>
            </div>
        `;
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    };

    renderError(message = this._errorMessage) {
        const markup = `
            <div class="error">
                <div>
                    <svg>
                        <use href="src/img/icons.svg#icon-alert-triangle"></use>
                    </svg>
                </div>
                <p>${message}</p>
            </div>
        `;
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    };  

    renderMessage(message = this._message) {
        const markup = `
            <div class="error">
                <div>
                    <svg>
                        <use href="src/img/icons.svg#icon-smile"></use>
                    </svg>
                </div>
                <p>${message}</p>
            </div>
        `;
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    };

    addHandlerRender(handler) {
        ['hashchange', 'load'].forEach(ev => window.addEventListener(ev, handler));
    };


    _generateMarkup() {
        console.log(this._data);
        return `
      <figure class="recipe__fig">
        <img src="${recipe.image}" alt="${recipe.title}" class="recipe__img" />
        <h1 class="recipe__title">
          <span>${recipe.title}</span>
        </h1>
      </figure>

      <div class="recipe__details">
        <div class="recipe__info">
          <svg class="recipe__info-icon">
            <use href="src/img/icons.svg#icon-clock"></use>
          </svg>
          <span class="recipe__info-data recipe__info-data--minutes">${recipe.cookingTime}</span>
          <span class="recipe__info-text">minutes</span>
        </div>

        <div class="recipe__info">
          <svg class="recipe__info-icon">
            <use href="src/img/icons.svg#icon-users"></use>
          </svg>
          <span class="recipe__info-data recipe__info-data--people">${recipe.servings}</span>
          <span class="recipe__info-text">servings</span>

          <div class="recipe__info-buttons">
            <button class="btn--tiny btn--increase-servings">
              <svg>
                <use href="src/img/icons.svg#icon-minus-circle"></use>
              </svg>
            </button>
            <button class="btn--tiny btn--increase-servings">
              <svg>
                <use href="src/img/icons.svg#icon-plus-circle"></use>
              </svg>
            </button>
          </div>
        </div>

        <div class="recipe__user-generated">
          <svg>
            <use href="src/img/icons.svg#icon-user"></use>
          </svg>
        <button class="btn--round">
          <svg class="">
            <use href="src/img/icons.svg#icon-bookmark-fill"></use>
          </svg>
        </button>
      </div>

      <div class="recipe__ingredients">
        <h2 class="heading--2">Recipe ingredients</h2>
        <ul class="recipe__ingredient-list">
          ${this.recipe.ingredients
          .map(this._generateMarkupIngredient)
          .join('')}
        </ul>
      </div>

      <div class="recipe__directions">
        <h2 class="heading--2">How to cook it</h2>
        <p class="recipe__directions-text">
          This recipe was carefully designed and tested by
          <span class="recipe__publisher">${recipe.publisher}</span>. Please check out
          directions at their website.
        </p>
        <a
          class="btn--small recipe__btn"
          href="${recipe.sourceUrl}"
          target="_blank"
        >
          <span>Directions</span>
          <svg class="search__icon">
            <use href="src/img/icons.svg#icon-arrow-right"></use>
          </svg>
        </a>
      </div>
    `;
    }   
  
    _generateMarkupIngredient(ing) {
      return `
        <li class='recipe__ingredient'>
          <svg class='recipe__icon'>
            <use href='src/img/icons.svg#icon-check'></use>
          </svg>
          <div class='recipe__quantity'>${ing.quantity ? new Fraction(ing.quantity).toString() : ''}</div>
          <div class='recipe__description'>
            <span class='recipe__unit'>${ing.unit}</span>
            ${ing.description}
          </div>
        </li>`;
  }
}

export default new RecipeView();