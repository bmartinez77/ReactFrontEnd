import React from 'react';
import SearchForm from './SearchForm';
import RecipeList from './RecipeList';

const SearchRecipe = (props) => {
    
    console.log('props uith update single recipe ', props);
    return (
    <div className='container'>
      <SearchForm onSubmit={props.updateSearchResults} />
      <RecipeList recipeList={props.recipeList} onClick={props.updateSingleRecipe}/>
    </div>
  );
};
export default SearchRecipe;