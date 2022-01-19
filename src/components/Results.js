import React from 'react'
import RecipeCard from "./RecipeCard";

function Results({recipesResults, inspectRecipe}) {
    let noResultHeader = <h4 className="no-results-display">No results found..</h4>;
    return (
        <div>
            <div className="card-list">
                {recipesResults ? recipesResults.map(recipe => <RecipeCard key={recipe.idMeal} recipe={recipe} inspectRecipe={inspectRecipe}/>) : noResultHeader}
            </div>
        </div>
    )
}

export default Results
