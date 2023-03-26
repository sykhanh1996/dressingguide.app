import { HttpException } from '@core/exceptions';
import { isEmptyObject } from '@core/utils';
import SuggestDto from './dtos/suggest.dto';
import ISuggest from './suggests.interface';
import SuggestSchema from './suggests.model';
export default class SuggestService {
  public async postSuggest(dto: SuggestDto): Promise<ISuggest> {
    let query = {};
    if (dto.colorId) {
      query = {
        colorId: dto.colorId,
      };
    }
    const suggestId = await SuggestSchema.findOne(query).exec();

    if (suggestId) throw new HttpException(400, 'Record already exists');

    const newSuggest = new SuggestSchema({
      ColorId: dto.colorId,
      ColorName: dto.colorName,
      Color: dto.color,
      BorderColor: dto.borderColor,
      Content: dto.content,
    });
    const suggest = await newSuggest.save();

    return suggest;
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
