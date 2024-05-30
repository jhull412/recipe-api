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
  const { name } = recipe;
  const data = {
    name,
    stats: { cookTime: 100, prepTime: 100, serves: 5 },
    directions: [],
    ingredients: [],
  };
  return db.recipe.create({
    data: { ...data },
    select: {
      id: true,
      name: true,
    },
  });
};
