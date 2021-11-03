import "./style/RecipeCard.css";

export default function RecipeCard({recipe}) {
    return(
        <div className="card-container">
            <img src={recipe.strMealThumb} alt={recipe.strMeal} />
            <h3>{recipe.strMeal}</h3>
            <p>Category: {recipe.strCategory}</p>
        </div>
    )
}