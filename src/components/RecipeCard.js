import "./style/RecipeCard.css";

export default function RecipeCard({recipe, inspectRecipe}) {
    function handleClick (){
        inspectRecipe(recipe.idMeal);
    }
    return(
        <div onClick={handleClick} className="card-container">
            <img src={recipe.strMealThumb} alt={recipe.strMeal} />
            <h3>{recipe.strMeal}</h3>
            <p>Category: {recipe.strCategory}</p>
        </div>
    )
}