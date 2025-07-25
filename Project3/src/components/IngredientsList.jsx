export default function IngredientsList(props) {
    // Returns list of ingredients
    const ingredientsListItems = props.ingredients.map((ingredient) => {
        return (
            <li key={ingredient}>{ingredient}</li>
        )
    })

    return (
        <section>
            <h2>Ingredients on hand:</h2>
            <ul>{ingredientsListItems}</ul>
            
            {props.ingredients.length > 3 ?
            <div className="generate-recipe-box">
                <div className="recipe-text-box">
                    <h3>Ready for a recipe?</h3>
                    <p>Generate a recipe from your list of ingredients.</p>
                </div>
                <button onClick={props.getRecipe}>Get a recipe</button>
            </div>: null}
        </section>
    )
}