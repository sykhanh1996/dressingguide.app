import { HttpException } from "@core/exceptions";
import { isEmptyObject } from "@core/utils";
import SuggestDto from "./dtos/suggest.dto";
import ISuggest from "./suggests.interface";
import SuggestSchema from "./suggests.model";
export default class SuggestService {
  public suggestShema = SuggestSchema;

  public async getSuggest(model: SuggestDto): Promise<ISuggest> {
    return {
      colorId: "2",
      content: "2",
    };
  }
}
