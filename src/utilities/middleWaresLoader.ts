import cors from 'cors';
import compression from 'compression';
import express, { Express } from 'express';
import morgan from 'morgan';

export const loadMiddleWares = (app: Express): void => {
  app.use(express.json())
  app.use(compression())
  app.use(cors());
  app.use(morgan('tiny'));
}