import { IsNotEmpty } from "class-validator";

export default class SuggestDto {
  constructor(colorId: string, content: string) {
    this.colorId = colorId;
    this.content = content;
  }
  @IsNotEmpty()
  public colorId: string;
  @IsNotEmpty()
  public content: string;
}
