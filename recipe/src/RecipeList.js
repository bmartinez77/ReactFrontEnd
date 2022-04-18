import React from 'react';
import Card from './Card';
import { useNavigate } from 'react-router';

const RecipeList = (props) => {
    const handleSectionOne = (recipeId, uri) => {
        console.log("Selection ID is ", recipeId);
        props.onClick(recipeId, navigator, uri);
    }
    
    console.log("props RecipeList ", props);
    const navigator = useNavigate();
    const recipes = props.recipeList.map((recipe) => {
        return (   
        <Card key = {recipe.id} recipename = {recipe.name} recipeinstructions= {recipe.instructions} recipedifficulty = {recipe.difficulty} recipedate = {recipe.date} buttontext="OK" onClick={handleSectionOne}/>
        );
    });
    return (<div className="container">{recipes}</div>);
}

export default RecipeList;