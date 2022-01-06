import React, {useState} from "react";
import "./style/SearchRecipes.css";
//import RecipeCard from "./RecipeCard";
import Header from './Header';

export default function SearchRecipes() {
    const [searchQuery, setSearchQuery] = useState("");
    const [recipesResults, setRecipesResults] = useState([]);

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
        <div>
            <Header 
                searchRecipes={searchRecipes} 
                searchQuery={searchQuery} 
                handleChange={handleChange}
                recipesResults={recipesResults} />
        </div>
    )
}

