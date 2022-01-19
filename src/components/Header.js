import RecipeCard from "./RecipeCard";
import "./style/Hero.css";

function Header ({searchRecipes, searchQuery, handleChange, recipesResults}) {
    
    let noResultHeader = <h4 className="no-results-display">No results found..</h4>;
//className="hero-image"
    return(
        <header>
            <div className="recipes-search-area hero-image">
                <h1>Recipe River</h1>
                <h5>Your ultimate recipe search platform</h5>
                <form className="search-form" onSubmit={searchRecipes}>
                    <label htmlFor="query" className="search-label">Type in a key word: </label>
                    <input value={searchQuery} onChange={handleChange} type="text" name="query" placeholder="i.e. chicken"/>
                    <button type="submit">Search</button>
                </form>
            </div>
            <div className="card-list">
                {recipesResults ? recipesResults.map(recipe => <RecipeCard recipe={recipe} />) : noResultHeader}
            </div>
        </header>
    )
}


export default Header