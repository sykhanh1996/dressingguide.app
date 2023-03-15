export default class SuggestDto {
  public colorId: string;
  public content: string;

  constructor(colorId: string, content: string) {
    this.colorId = colorId;
    this.content = content;
  }
}
