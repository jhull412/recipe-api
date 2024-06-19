const { Router } = require("express");
const recipesController = require("../controllers/recipesController");
const app = Router();

app.get("/recipes", recipesController.getRecipes);
app.get("/recipesList", recipesController.getRecipesList);
app.get("/recipes/:id", recipesController.findById);
app.post("/recipes", recipesController.create);
app.post("/recipes/:id", recipesController.updateImage);

module.exports = app;
