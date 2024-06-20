import { Request, Response } from "express";
import {
  getRecipes,
  getRecipe,
  create,
  getRecipesList,
} from "../services/recipe.service";

exports.getRecipes = async (req: Request, res: Response) => {
  const result = await getRecipes();
  res.json(result);
};

exports.getRecipesList = async (req: Request, res: Response) => {
  const result = await getRecipesList();
  res.json(result);
};

exports.findById = async (req: Request<{ id: string }>, res: Response) => {
  const result = await getRecipe(parseInt(req.params.id));
  res.json(result);
};

exports.create = async (req: Request, res: Response) => {
  const result = await create(req.body);
  res.json(result);
};

exports.updateImage = async (req: Request<{ id: string }>, res: Response) => {
  console.log(req.file);
  res.json(req.body);
};
