import { HttpException } from '@core/exceptions';
import { isEmptyObject } from '@core/utils';
import SuggestDto from './dtos/suggest.dto';
import ISuggest from './suggests.interface';
import SuggestSchema from './suggests.model';
export default class SuggestService {
  public suggestShema = SuggestSchema;

  public async postSuggest(model: SuggestDto): Promise<ISuggest> {
    return {
      Id: '2',
      Color: '2',
      ColorName: '2',
      BorderColor: '2',
      Content: '2',
    };
  }

  public test(): void {
    return add(2, 5);
  }
}

function add(x: any, y: any) {
  if (arguments.length === 1) {
    return function (y: any) {
      return x + y;
    };
  }
  return x + y;
}
