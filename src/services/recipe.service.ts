import { CreateRecipeDTO } from "../types/dto";
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

export const create = async (recipe: CreateRecipeDTO): Promise<Recipe> => {
  return db.recipe.create({
    data: {
      name: recipe.name,
      stats: {
        create: recipe.stats,
      },
      ingredients: {
        create: recipe.ingredients,
      },
      directions: {
        create: recipe.directions,
      },
    },
    select: {
      id: true,
      name: true,
    },
  });
};
