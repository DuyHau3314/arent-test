// src/mirage/seeds/meal.ts
import { faker } from '@faker-js/faker';

export default function mealSeeds(server: any) {
  const foodTypes = ['morning', 'lunch', 'dinner', 'snack'];
  const foodImages = {
    morning: ['/assets/m01.jpg', '/assets/m02.jpg', '/assets/m03.jpg'],
    lunch: ['/assets/l01.jpg', '/assets/l02.jpg', '/assets/l03.jpg'],
    dinner: ['/assets/d01.jpg', '/assets/d02.jpg'],
    snack: ['/assets/s01.jpg']
  };

  for (let i = 0; i < 100; i++) {
    foodTypes.forEach((type) => {
      server.create('meal', {
        name: faker.commerce.productName(),
        imageUrl: faker.helpers.arrayElement(foodImages[type]),
        type,
        date: faker.date.recent(30).toISOString().split('T')[0]
      });
    });
  }
}
