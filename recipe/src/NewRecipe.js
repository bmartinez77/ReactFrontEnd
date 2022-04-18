import React, { useState } from "react";
import { useNavigate } from 'react-router';
import dataSource from './dataSource';

const NewRecipe = (props) => {

    const [recipeName, setRecipeName] = useState('');
    const [difficulty, setDifficulty] = useState('');
    const [date, setDate] = useState('');
    const [instructions, setInstructions] = useState('');
    const navigate = useNavigate();

    const handleFormSubmit = (event) => {
    event.preventDefault();
    
        console.log("submit");
        const recipe = {
            name: recipeName,
            instructions: instructions,
            difficulty: difficulty,
            date: date,
        };
        console.log(recipe);
        saveRecipe(recipe);
    };
    const saveRecipe = async (recipe) => {
        const response = await dataSource.post('/recipes', recipe);
        console.log(response);
        console.log(response.data);
        props.onNewRecipe(navigate);
    };
    const handleCancel = () => {
        navigate("/");
    }

    const updateName = (event) => {
        setRecipeName(event.target.value);
    };


    const updateDifficulty = (event) => {
        setDifficulty(event.target.value);
    };

    const updateDate = (event) => {
        setDate(event.target.value);
    };

    const updateInstructions = (event) => {
        setInstructions(event.target.value);
    };

    return (
        <div className='container'>
            <form onSubmit={handleFormSubmit}>
                <div className='form-group'>
                    <label htmlFor='recipeName'>Recipe Name</label>
                    <input type='text' className='form-control' id='recipeName' placeholder='Enter Recipe Name' value={recipeName} onChange={updateName} />
                    <label htmlFor="recipeInstructions">Instructions</label>
                    <textarea type="text" className="form-control" id="recipeInstructions" placeholder="Enter Recipe Instructions" value={instructions} onChange={updateInstructions} />
                    <label htmlFor="recipeInstructions">Difficulty</label>
                    <input type="number" className="form-control" id="recipeDescription" placeholder="Enter recipe Difficulty" value={difficulty} onChange={updateDifficulty} />
                    <label htmlFor="recipeDate">Date</label>
                    <input type="number" className="form-control" id="recipeDate" placeholder="Enter Recipe Year" value={date} onChange={updateDate} />
                </div>
                <div align="center">
                    <button type="button" className="btn btn-light" onClick={handleCancel}>Cancel</button>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default NewRecipe;