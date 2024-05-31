type Stat = {
  recipeId: number;
  prepTime: string;
  cookTime: string;
  serves: string;
};

type Direction = {
  recipeId: number;
  step: string;
};

type Ingredient = {
  recipeId: number;
  name: string;
  amount: string;
  unit: string;
};

export type CreateRecipeDTO = {
  name: string;
  stats: Stat;
  directions: [Direction];
  ingredients: [Ingredient];
};
