/* eslint-disable @typescript-eslint/no-explicit-any */
export default function mealRoutes(server: any) {
  server.get('/api/diaries', (schema: any, request: any) => {
    const page = parseInt(request.queryParams.page || '1', 10);
    const perPage = parseInt(request.queryParams.perPage || '8', 10);

    const allDiaries = schema.db.diaries
      .sort((a, b) => b.date.localeCompare(a.date)) // Sort by date descending
      .map((meal, index) => {
        meal.date = meal.date.split('T')[0]; // Simplify date format to 'YYYY-MM-DD'
        return meal;
      });

    const total = allDiaries.length;
    const pageStart = (page - 1) * perPage;
    const pageEnd = pageStart + perPage;
    const diaries = allDiaries.slice(pageStart, pageEnd);

    return {
      meals: diaries,
      total: total,
      currentPage: page,
      perPage: perPage,
      totalPages: Math.ceil(total / perPage)
    };
  });
}
