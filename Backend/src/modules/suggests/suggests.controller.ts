import { NextFunction, Response, Request } from 'express';
import SuggestDto from './dtos/suggest.dto';
import ISuggest from './suggests.interface';
import SuggestService from './suggests.service';

export default class SuggestsController {
  private suggestService = new SuggestService();

  public postSuggests = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const models: SuggestDto = req.body;
      const postedSuggests: ISuggest = await this.suggestService.postSuggest(models);
      res.status(201).json(postedSuggests);
    } catch (error) {
      next(error);
    }
  };

  public test = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const models: SuggestDto = req.body;
      const postedSuggests: any = await this.suggestService.test();
      res.status(201).json(postedSuggests);
    } catch (error) {
      next(error);
    }
  };
}
