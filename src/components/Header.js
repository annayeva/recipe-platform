import "./style/Hero.css";

function Header ({searchRecipes, searchQuery, handleChange}) {
    return(
        <header className="recipes-search-area hero-image">
            <h1 className="header-tittle">Recipe river</h1>
            <h5>Your ultimate recipe search platform</h5>
            <form className="search-form" onSubmit={searchRecipes}>
                <label htmlFor="query" className="search-label">Type in a key word: </label>
                <input value={searchQuery} onChange={handleChange} type="text" name="query" placeholder="i.e. chicken"/>
                <button type="submit">Search</button>
            </form>
        </header>
    )
}


export default Header