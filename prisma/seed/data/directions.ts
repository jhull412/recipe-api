type Direction = {
  id: number;
  recipeId: number;
  step: string;
};

export function getDirections(): Array<Direction> {
  return [
    { id: 1, recipeId: 1, step: "Pound chicken to flatten." },
    { id: 2, recipeId: 1, step: "Salt and pepper to taste." },
    { id: 3, recipeId: 1, step: "Dip chicken in egg; then in bread crumbs." },
    {
      id: 4,
      recipeId: 1,
      step: "Fry in butter in hot skillet, turning and browning for 10 minutes or until chicken is done.",
    },
    { id: 5, recipeId: 1, step: "Remove from skillet." },
    { id: 6, recipeId: 1, step: "To skillet add spaghetti sauce." },
    { id: 7, recipeId: 1, step: "Heat thoroughly." },
    { id: 8, recipeId: 1, step: "Add chicken." },
    {
      id: 9,
      recipeId: 1,
      step: "Place slices of mozzarella on top of chicken.",
    },
    { id: 10, recipeId: 1, step: "Sprinkle with parmesan." },
    { id: 11, recipeId: 1, step: "Cover and cook until cheese is melted." },
    {
      id: 12,
      recipeId: 1,
      step: "Serve with a side of spaghetti. Optional, garnish with chopped parsley and more parmesan cheese.",
    },
    {id: 13, recipeId: 2, step:"Butter 1 side of each slice of bread."},
    {id: 14, recipeId: 2, step:"Place bread slices butter-side down in skillet over medium heat."},
    {id: 15, recipeId: 2, step:"Place a slice of cheese on each slice of bread."},
    {id: 16, recipeId: 2, step:"Cook for 5 minutes or until bread is golden-brown and cheese is melted."},
    {id: 17, recipeId: 2, step: "Close sandwich and remove from heat."},
    {id: 18, recipeId: 2, step: "Wait 2 minutes, then slice."},
  ];
}
