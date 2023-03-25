import { Route } from '@core/interfaces';
import validationMiddleware from '@core/middleware/validation.middleware';
import { Router } from 'express';
import SuggestDto from './dtos/suggest.dto';
import SuggestsController from './suggests.controller';

export default class SuggestsRoute implements Route {
  public path = '/api/suggests';
  public router = Router();

  public suggestsController = new SuggestsController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(this.path, validationMiddleware(SuggestDto, true), this.suggestsController.postSuggests);
    this.router.get(this.path, this.suggestsController.test);
  }
}
