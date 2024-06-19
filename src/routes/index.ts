const { Router } = require("express");
const recipesController = require("../controllers/recipesController");
const multer = require("multer");
const upload = multer({ dest: "/images" });
const app = Router();

app.get("/recipes", recipesController.getRecipes);
app.get("/recipesList", recipesController.getRecipesList);
app.get("/recipes/:id", recipesController.findById);
app.post("/recipes", recipesController.create);
app.post("/recipes/:id", upload.single("file"), recipesController.updateImage);

module.exports = app;
