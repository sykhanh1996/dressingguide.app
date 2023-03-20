import { NextFunction, Response, Request } from "express";
import SuggestDto from "./dtos/suggest.dto";
import ISuggest from "./suggests.interface";
import SuggestService from "./suggests.service";

export default class SuggestsController {
  private suggestService = new SuggestService();

  public getSuggests = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const models: SuggestDto = req.body;
      const test2: ISuggest = await this.suggestService.getSuggest(models);
      res.status(201).json(test2);
    } catch (error) {
      next(error);
    }
  };
}
