type Ingredient = {
  id: number;
  recipeId: number;
  name: string;
  amount: string;
  unit: string;
};

export function getIngredients(): Array<Ingredient> {
  return [
    {
      id: 1,
      recipeId: 1,
      name: "Boneless Skinless Chicken Breast halves",
      amount: "4",
      unit: "",
    },
    {
      id: 2,
      recipeId: 1,
      name: "Salt & Pepper",
      amount: "",
      unit: "",
    },
    {
      id: 3,
      recipeId: 1,
      name: "Italian Breadcrumbs",
      amount: "1/2",
      unit: "cup",
    },
    {
      id: 4,
      recipeId: 1,
      name: "Fresh-grated Parmesan Cheese",
      amount: "1",
      unit: "cup",
    },
    { id: 5, recipeId: 1, name: "Egg, beaten", amount: "1", unit: "" },
    { id: 6, recipeId: 1, name: "Butter", amount: "4", unit: "tbsp" },
    {
      id: 7,
      recipeId: 1,
      name: "Mozzarella Cheese",
      amount: "4",
      unit: "slices",
    },
    { id: 8, recipeId: 1, name: "Marinara Sauce", amount: "2", unit: "cups" },
    { id: 9, recipeId: 1, name: "Spaghetti (cooked)", amount: "1", unit: "lb" },
    {
      id: 10,
      recipeId: 1,
      name: " chopped parsley, for garnish (optional)",
      amount: "2",
      unit: "tbsp",
    },
    {id:11,recipeId:2,name:"Bread", amount:"2", unit:"slices"},
    {id:12,recipeId:2,name:"Cheese", amount:"2", unit:"slices"},
    {id:13,recipeId:2,name:"Butter", amount:"2", unit:"tbsp"},
  ];
}
