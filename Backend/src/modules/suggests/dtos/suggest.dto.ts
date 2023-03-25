import { IsNotEmpty } from 'class-validator';

export default class SuggestDto {
  constructor(id: string, color: string, colorName: string, borderColor: string, content: string) {
    this.id = id;
    this.color = color;
    this.colorName = colorName;
    this.borderColor = borderColor;
    this.content = content;
  }
  @IsNotEmpty()
  public id: string;

  @IsNotEmpty()
  public color: string;

  @IsNotEmpty()
  public colorName: string;

  @IsNotEmpty()
  public borderColor: string;

  public content: string;
}
