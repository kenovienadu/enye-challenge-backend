import axios from "axios";
import httpError from 'http-errors';

import config from "../config";
import { convertObjectToUppercase } from './../utilities/helpers';
import { IQuery } from "../interfaces/IQuery";

class ExchangeRatesApiService {
  private endpoint = config.ratesApi;

  public async getLiveRates(query: IQuery = {}) {
    try {

      if (query.currency) {
        query.symbols = query.currency
      }

      const upperCasedQuery = convertObjectToUppercase(query);
      const response = await axios.get(this.endpoint, { params: upperCasedQuery });
      return response.data || null;

    } catch (error) {
      const { data, status } = error.response;
      throw httpError(status, data.error);
    }
  }
}

export const ExchangeRatesServiceInstance = new ExchangeRatesApiService;