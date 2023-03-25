import { IsNotEmpty } from 'class-validator';

export default class SuggestDto {
  constructor(colorId: string, color: string, colorName: string, borderColor: string, content: string) {
    this.colorId = colorId;
    this.color = color;
    this.colorName = colorName;
    this.borderColor = borderColor;
    this.content = content;
  }
  @IsNotEmpty()
  public colorId: string;

  @IsNotEmpty()
  public color: string;

  @IsNotEmpty()
  public colorName: string;

  @IsNotEmpty()
  public borderColor: string;

  public content: string;
}
