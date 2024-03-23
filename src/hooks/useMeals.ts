import { useInfiniteQuery } from 'react-query';
import { fetchMeals } from 'src/api/meal';

export const useMeals = (type?: string) => {
  return useInfiniteQuery(['meals', { type }], ({ pageParam = 1 }) => fetchMeals({ pageParam, type }), {
    getNextPageParam: (lastPage) => {
      if (lastPage.currentPage < lastPage.totalPages) {
        return lastPage.currentPage + 1;
      } else {
        return undefined;
      }
    }
  });
};
