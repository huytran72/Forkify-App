import View from "./Views";
import icons from "url:../../img/icons.svg"; // Parcel 2

class AddRecipeView extends View {
    _parentElement = document.querySelector(".upload"); 
    
    _generateMarkup() {}
};

export default new AddRecipeView();