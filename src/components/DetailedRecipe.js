import React from 'react'
import "./style/Detailedrecipe.css";

function DetailedRecipe({detailedRecipe}) {
    var ingredientArray = [];
    function checkIngredients () {
        for(var i = 1; i < 21; i++) {
            var ingredIndex = "strIngredient" + i;
            var ingredMeasureIndex = "strMeasure" + i;
            var ingredientName = detailedRecipe[ingredIndex];
            var ingredientMeasure = detailedRecipe[ingredMeasureIndex];
            if (ingredientName) {
               var json = {"ingName": ingredientName, "ingMeasure":ingredientMeasure};
               ingredientArray.push(json);
            }
        }
    }
    checkIngredients();
    return (
        <div className="detailed-recipe">
            {
                !(Object.keys(detailedRecipe).length === 0)  &&
                <div className="detailed-recipe-container">
                    <div className="detailed-recipe-hero">
                        <div className="recipe-facts">
                            <h1>{detailedRecipe.strMeal}</h1>
                            <span>
                            <h4 className="recipe-fact-item">Category: {detailedRecipe.strCategory}</h4>
                            <h4 className="recipe-fact-item">Cuisine: {detailedRecipe.strArea}</h4>
                            </span>
                        </div>
                        <div>
                            <img className="detailed-recipe-img" alt={detailedRecipe.strMeal} src={detailedRecipe.strMealThumb} />
                        </div>
                    </div>
                    <div className="detailed-recipe-content">
                        <ul className="ingred-list">
                            {ingredientArray.map(ingredient => 
                                <li className="ingredients-item" key={ingredient.ingName + Math.random()}>
                                    <span>{ingredient.ingName}</span>
                                    <span>({ingredient.ingMeasure})</span>
                                    <hr />
                                </li>
                            )}
                        </ul>
                        <div className="recipe-instructions">
                            <h2>Instructions:</h2>
                            <p>{detailedRecipe.strInstructions}</p>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default DetailedRecipe
