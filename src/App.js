import './App.css';
import Header from './components/Header';
import SearchRecipes from './components/SearchRecipes';

function App() {
  return (
    <div className="App">
      <Header titleText="Recipe platform" pText="-" />
      <SearchRecipes />
    </div>
  );
}

export default App;
