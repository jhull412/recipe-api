type Recipe = {
  name: string;
};

export function getRecipes(): Array<Recipe> {
  return [
    {
      name: "Chicken Parmesan",
    },
    {
      name: "Grilled Cheese",
    },
  ];
}
