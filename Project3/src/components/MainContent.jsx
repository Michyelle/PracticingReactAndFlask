import React from 'react';
import ClaudeRecipe from './ClaudeRecipe.jsx';
import IngredientsList from './IngredientsList.jsx';
// import { getRecipeFromMistral } from "./ai"


export default function MainContent() {
    const [ingredients, setIngredients] = React.useState([]);
    const [showRecipe, setShowRecipe] = React.useState(false);

    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient");
        setIngredients(prevIngredients => [...prevIngredients, newIngredient]);
    }

    function getRecipe() {
        // const recipeMarkdown = await getRecipeFromMistral(ingredients)
        // setShowRecipe(recipeMarkdown)
        setShowRecipe(prevShown => !prevShown)
    }

    return (
        <main>
            <form action={addIngredient} className="add-ingredient-form">
                {/* "name" is the URL refresh. */}
                <input type="text" placeholder="e.g. oregano" aria-label="Add Ingredient" name="ingredient"/>
                <button>Add ingredient</button>
            </form>
            {ingredients.length > 0 ? 
            <IngredientsList  
                ingredients={ingredients}
                getRecipe={getRecipe}
            />: null}
            {showRecipe && <ClaudeRecipe />}
        </main>
    )
}