import { db } from "../utils/db.server";
import { Recipe } from "@prisma/client";

export const getRecipes = async () => {
  return db.recipe.findMany({
    include: {
      stats: true,
      ingredients: true,
      directions: true,
    },
  });
};

export const getRecipesList = async () => {
  return db.recipe.findMany();
};

export const getRecipe = async (id: number) => {
  return db.recipe.findUnique({
    where: { id: id },
    include: {
      stats: true,
      ingredients: true,
      directions: true,
    },
  });
};

export const create = async (recipe: Omit<Recipe, "id">): Promise<Recipe> => {
  return db.recipe.create({
    data: {
      name: recipe.name,
      stats: {
        create: { cookTime: 100, prepTime: 100, serves: 5 },
      },
    },
    select: {
      id: true,
      name: true,
    },
  });
};
