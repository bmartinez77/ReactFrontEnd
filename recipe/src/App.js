import React, { useState, useEffect } from "react";
import './App.css';
import dataSource from './dataSource';
import SearchRecipe from "./SearchRecipe";
import NavBar from "./NavBar";
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import NewRecipe from "./NewRecipe";
import OneRecipe from "./OneRecipe";

const App = () => {
  const [searchPhrase, setSearchPhrase] = useState('');
  const [recipeList, setRecipeList] = useState([]);
  const [currentlySelectedRecipeId, setCurrentlySelectedRecipeId] = useState(0);

  let refresh = false;

  const loadRecipes = async () => {
    const response = await dataSource.get('recipes');
    setRecipeList(response.data);
  };

  useEffect(() => {
    loadRecipes();
  }, [refresh]);

  const updateSearchResults = (phrase) => {
    console.log("phrase = ", phrase);
    setSearchPhrase(phrase);
  }


  const updateSingleRecipe = (id, navigate, uri) => {

    console.log('Update Single recipe ', id);
    console.log('Update Single recipe ', navigate);

    var indexNumber = 0;
    for (var i = 0; i < recipeList.length; ++i) {
      if (recipeList[i].id === id) indexNumber = i;
    }
    setCurrentlySelectedRecipeId(indexNumber);
    let path = uri + indexNumber;
    console.log('path ', path);
    navigate(path);
  };


  console.log("recipeList", recipeList);
  const renderedList = recipeList.filter((recipe) => {

    if (
      recipe.name.toLowerCase().includes(searchPhrase.toLowerCase()) ||
      searchPhrase === ''
    ) {
      return true;
    }
    return false;
  });

  console.log("renderlist", renderedList);

  const onNewRecipe = (navigate) => {
    loadRecipes();
    navigate("/");
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route
          exact
          path='/'
          element={
            <SearchRecipe
              updateSearchResults={updateSearchResults}
              recipeList={renderedList}
              updateSingleRecipe={updateSingleRecipe}
            />
          }
        />
        <Route exact path='/new' element={<NewRecipe onNewRecipe={onNewRecipe} />} />
        <Route
          exact
          path='/show/: recipeId'
          element={<OneRecipe recipe={recipeList[currentlySelectedRecipeId]} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
