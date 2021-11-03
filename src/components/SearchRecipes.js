import React, {useState} from "react";
import "./style/SearchRecipes.css";
import RecipeCard from "./RecipeCard";

export default function SearchRecipes() {
    const [searchQuery, setSearchQuery] = useState("");
    const [recipesResults, setRecipesResults] = useState([]);
    let noResultHeader = <h4 className="no-results-display">No results found..</h4>;

    const searchRecipes = async (e) => {
        e.preventDefault();
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`;

        try {
            const res = await fetch(url);
            const data = await res.json();
            setRecipesResults(data.meals);
            console.log("data.meals: " + data.meals);
        } catch(err){
            console.log(err);
        }

        console.log("recipesResults: " + recipesResults);

    }

    function handleChange (e) {
        setSearchQuery(e.target.value);
    }

    return (
        <div className="recipes-search-area">
            <form className="search-form" onSubmit={searchRecipes}>
                <label htmlFor="query" className="search-label">Type in a key word: </label>
                <input value={searchQuery} onChange={handleChange} type="text" name="query" placeholder="i.e. chicken"/>
                <button type="submit">Search</button>
            </form>
            <div className="card-list">
                {recipesResults ? recipesResults.map(recipe => <RecipeCard recipe={recipe} />) : noResultHeader}
            </div>
        </div>
    )
}

