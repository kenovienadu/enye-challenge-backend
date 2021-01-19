import express from 'express';
import config from './config';
import { routesLoader } from './utilities/routesLoader';
import { loadMiddleWares } from './utilities/middleWaresLoader';
import { generalRoutes } from './routes/general.routes';

const startServer = () => {
  const app = express();

  loadMiddleWares(app);
  routesLoader(app, [...generalRoutes]);

  app.listen(config.port, () => console.log(`app listening on port : ${config.port}`));
};


startServer();