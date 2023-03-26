import { HttpException } from '@core/exceptions';
import { isEmptyObject } from '@core/utils';
import SuggestDto from './dtos/suggest.dto';
import ISuggest from './suggests.interface';
import SuggestSchema from './suggests.model';
export default class SuggestService {
  public async postSuggest(dto: SuggestDto[]): Promise<ISuggest[]> {
    let query = {};
    const lstId: string[] = dto.map((item) => {
      return item.colorId;
    });
    if (dto) {
      query = {
        ColorId: { $in: lstId },
      };
    }
    const suggestId = await SuggestSchema.find(query).exec();

    if (suggestId.length > 0) throw new HttpException(400, 'Record already exists');

    const lstInsert = dto.map((item) => {
      return {
        ColorId: item.colorId,
        ColorName: item.colorName,
        Color: item.color,
        BorderColor: item.borderColor,
        Content: item.content,
      };
    });
    const newSuggests = SuggestSchema.insertMany(lstInsert)
      .then(function () {
        return lstInsert;
      })
      .catch(function (err) {
        throw new HttpException(400, '[Error]:' + err);
      });

    return newSuggests;
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
