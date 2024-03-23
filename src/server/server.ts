// src/mirage/server.ts
import { createServer } from 'miragejs';

import activityFactory from './factories/activity';
import diaryFactory from './factories/diary';
import mealFactory from './factories/meal';
import activityModel from './models/activity';
import diaryModel from './models/diary';
import mealModel from './models/meal';
import activityRoutes from './routes/activity';
import diaryRoutes from './routes/diary';
import mealRoutes from './routes/meal';
import activitySeeds from './seeds/activity';
import diarySeeds from './seeds/diary';
import mealSeeds from './seeds/meal';

export function makeServer({ environment = 'development' } = {}) {
  const server = createServer({
    environment,

    models: {
      meal: mealModel,
      activity: activityModel,
      diary: diaryModel
      // ... other models
    },

    factories: {
      meal: mealFactory,
      activity: activityFactory,
      diary: diaryFactory
      // ... other factories
    },

    seeds(server) {
      mealSeeds(server);
      activitySeeds(server);
      diarySeeds(server);
      // ... other seed functions
    },

    routes() {
      mealRoutes(this);
      activityRoutes(this);
      diaryRoutes(this);
      // ... other route functions
    }
  });

  return server;
}
