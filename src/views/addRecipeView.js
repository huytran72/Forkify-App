import View from "./Views";
import icons from "url:../../img/icons.svg"; // Parcel 2

class AddRecipeView extends View {
    _parentElement = document.querySelector(".upload"); 

    _message = "Recipe was successfully uploaded";

    _window = document.querySelector(".add-recipe-window");
    _overlay = document.querySelector(".overlay");
    _btnOpen = document.querySelector(".nav__btn--add-recipe");
    _btnClose = document.querySelector(".btn--close-modal");

    addHandlerShowWindow(handler) {
        this._btnOpen.addEventListener("click", function() {
            this._window.classList.add("hidden");
        });

    }
    
    _generateMarkup() {}
};

export default new AddRecipeView();