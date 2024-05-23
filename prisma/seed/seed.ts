import { db } from "../../src/utils/db.server";
import { getDirections } from "./data/directions";
import { getIngredients } from "./data/ingredients";
import { getRecipes } from "./data/recipes";
import { getStats } from "./data/stats";

async function seed() {
  Promise.all([
    db.recipe.createMany({ data: getRecipes() }),
    db.stat.createMany({ data: getStats() }),
    db.ingredient.createMany({ data: getIngredients() }),
    db.direction.createMany({ data: getDirections() }),
  ]);
}

seed();
