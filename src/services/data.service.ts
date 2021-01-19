import httpError from 'http-errors';
import { Response, Request } from 'express';

import { ExchangeRatesServiceInstance } from './exhangeRate.service';
import { sendJsonData, sendErrorResponse } from './../utilities/responses';


class DataService {
  async getRateHandler(req: Request, res: Response) {
    try {
      const query = req.query || null;

      const data = await ExchangeRatesServiceInstance.getLiveRates(query);
      return sendJsonData(res, data);

    } catch (error) {
      return sendErrorResponse(res, error)
    }
  }

  unknownRouteHandler(req: Request, res: Response) {
    sendErrorResponse(res, new httpError(400, 'Not Available'));
  }
}

export const DataServiceInstance = new DataService;