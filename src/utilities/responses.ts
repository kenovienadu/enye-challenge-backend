import { Response } from 'express'
import { IHttpError } from '../interfaces/IHttpError'
/**
  * Method to return an error message over  the api
  * @param {string} message - the message to be sent over
  */
export const sendErrorResponse = (res: Response, error: IHttpError): Response => {

  return res.status(error.status || 400).json({
    status: 'Error',
    message: error.message || ''
  })
}

/**
 * Method to return a success message along with some data
 * @param {object} res - express response object
 * @param {object} data - data to be sent over the api 
 */
export const sendSuccessResponse = (res: Response, message: string, data: any = {}): Response => {
  return res.status(200).json({
    status: 'success',
    message,
    data
  })
}

/**
 * Method to return a success message along with some data
 * @param {object} res - express response object
 * @param {object} data - data to be sent over the api 
 */
export const sendJsonData = (res: Response, results: any): Response => {
  return res.status(200).json({
    // status: 'success',
    results
  })
}