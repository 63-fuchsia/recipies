const list = document.querySelector(".list");
const template = document.querySelector(".recipes-template");

function createIngredients(ingredients, recipeElement) {
  ingredients.map((ingredient, index) => {
    let ingredientsItem = recipeElement.querySelector(".ingredients__item");

    if (index) {
      ingredientsItem = ingredientsItem.cloneNode();
      ingredientsItem.textContent=", ";
    }

    ingredientsItem.textContent += ingredient;
    recipeElement.querySelector(".ingredients").append(ingredientsItem);
  });
}

function createRecipe(recipe) {
  const item = template.content.querySelector(".recipe").cloneNode(true);

  item.querySelector(".recipe__title").textContent = recipe.name;
  item.querySelector(".recipe__img").src = recipe.image;
  createIngredients(recipe.ingredients, item);

  list.append(item);
}

// https://jsonplaceholder.typicode.com/todos 
fetch("https://dummyjson.com/recipes?limit=10")
  .then((res) => res.json())
  .then((data) => {
    data.recipes.map((recipe) => createRecipe(recipe));
  });

