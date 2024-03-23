// src/mirage/server.ts
import { createServer } from 'miragejs';

import mealFactory from './factories/meal';
import mealModel from './models/meal';
import mealRoutes from './routes/meal';
import mealSeeds from './seeds/meal';

export function makeServer({ environment = 'development' } = {}) {
  const server = createServer({
    environment,

    models: {
      meal: mealModel
      // ... other models
    },

    factories: {
      meal: mealFactory
      // ... other factories
    },

    seeds(server) {
      mealSeeds(server);
      // ... other seed functions
    },

    routes() {
      mealRoutes(this);
      // ... other route functions
    }
  });

  return server;
}
