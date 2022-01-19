import React, {useState} from "react";
import "./style/SearchRecipes.css";
//import RecipeCard from "./RecipeCard";
import Header from './Header';
import Results from "./Results";
import DetailedRecipe from "./DetailedRecipe";

export default function SearchRecipes() {
    const [searchQuery, setSearchQuery] = useState("");
    const [recipesResults, setRecipesResults] = useState([]);
    const [detailedRecipe, setDetailedRecipe] = useState({});

    const searchRecipes = async (e) => {
        setDetailedRecipe({});
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
    }

    function handleChange (e) {
        setSearchQuery(e.target.value);
    }

    function inspectRecipe(id) {
        let inspectedRecipe = recipesResults.filter(recipe => recipe.idMeal === id);
        setDetailedRecipe(inspectedRecipe[0]);
        setRecipesResults([]);
        //console.log(JSON.stringify(detailedRecipe.strMeal));
    }

    return (
        <div>
            <Header 
                searchRecipes={searchRecipes} 
                searchQuery={searchQuery} 
                handleChange={handleChange}
            />
            <Results 
                recipesResults={recipesResults} 
                inspectRecipe={inspectRecipe}
            />
            <DetailedRecipe detailedRecipe={detailedRecipe} />
        </div>
    )
}

