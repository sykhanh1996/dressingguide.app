export interface IColorItem {
    id: string;
    color: string;
    colorName: string;
    borderColor: string;
}
export interface IColorItems {
    colorArr: IColorItem[];
    setColorValue?: (prev: any) => void;
}
