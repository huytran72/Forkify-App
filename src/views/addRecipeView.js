import View from "./Views";
import icons from "url:../../img/icons.svg"; // Parcel 2

class AddRecipeView extends View {
    _parentElement = document.querySelector(".upload"); 

    _message = "Recipe was successfully uploaded";

    _window = document.querySelector(".add-recipe-window");
    _overlay = document.querySelector(".overlay");
    _btnOpen = document.querySelector(".nav__btn--add-recipe");
    _btnClose = document.querySelector(".btn--close-modal");

    constructor() {
        super();
        this._addHandlerShowWindow();
        this._addHandlerHideWindow();     
    }

    toggleWindow() {
        this._overlay.classList.toggle("hidden");
        this._window.classList.toggle("hidden");
    }

    addHandlerShowWindow(handler) {
        this._btnOpen.addEventListener("click", this.toggleWindow);
    }

    _addHandlerHideWindow() {
        this._btnClose.addEventListener("click", this.toggleWindow);    
        this._overlay.addEventListener("click", this.toggleWindow);
    };

    addHandlerUpload(handler) {
        
    };
    
    _generateMarkup() {}
};

export default new AddRecipeView();