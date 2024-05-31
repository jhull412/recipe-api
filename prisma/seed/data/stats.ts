type Stat = {
  id: number;
  recipeId: number;
  prepTime: string;
  cookTime: string;
  serves: string;
};

export function getStats(): Array<Stat> {
  return [
    {
      id: 1,
      recipeId: 1,
      prepTime: '15',
      cookTime: '30',
      serves: '4',
    },
    {
      id: 2,
      recipeId: 2,
      prepTime: '5',
      cookTime: '5',
      serves: '1',
    },
  ];
}
