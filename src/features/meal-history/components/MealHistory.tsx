import React, { FC, ReactElement, useEffect, useState } from 'react';
import { useMeals } from 'src/hooks/useMeals';

interface Meal {
  id: string;
  name: string;
  imageUrl: string;
  type: string;
  date: string;
}

const MealHistory: FC = (): ReactElement => {
  const [mealType, setMealType] = useState<string | null>(null);
  const { data, error, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } = useMeals(mealType);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>An error occurred: {error instanceof Error ? error.message : 'Unknown error'}</div>;
  }

  const handleFilterChange = (type: string) => {
    setMealType(type);
  };

  return (
    <div>
      <div>
        {['Morning', 'Lunch', 'Dinner', 'Snack'].map((type) => (
          <button key={type} onClick={() => handleFilterChange(type)}>
            {type}
          </button>
        ))}
      </div>
      <h1>Meals</h1>
      {data?.pages.map((group, i) => (
        <React.Fragment key={i}>
          {group.meals.map((meal) => (
            <div key={meal.id}>{meal.name}</div>
          ))}
        </React.Fragment>
      ))}
      <div>
        <button onClick={() => fetchNextPage()} disabled={!hasNextPage || isFetchingNextPage}>
          {isFetchingNextPage ? 'Loading more...' : hasNextPage ? 'Load More' : 'Nothing more to load'}
        </button>
      </div>
    </div>
  );
};

export default MealHistory;
