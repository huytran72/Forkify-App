import View from "./Views";
import icons from "url:../../img/icons.svg"; // Parcel 2

class AddRecipeView extends View {
    _parentElement = document.querySelector(".upload"); 

    _message = "Recipe was successfully uploaded";
    
    _generateMarkup() {}
};

export default new AddRecipeView();