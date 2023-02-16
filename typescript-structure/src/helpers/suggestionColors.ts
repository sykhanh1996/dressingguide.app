import { IColorItem, DressingGuideData } from '@src/views/app-views/dressingGuide/DressingGuide.data';

function filterColors(arrColor: string[]): IColorItem[] {
    var filter = DressingGuideData.filter((cl) => arrColor.includes(cl.colorName.toLowerCase()));
    return filter;
}
export function suggestionColor(colorId: string): IColorItem[] {
    var suggestColors: IColorItem[] = [];
    switch (colorId) {
        case 'white': {
            suggestColors = filterColors(['black']);
            break;
        }
        case 'black': {
            suggestColors = filterColors(['white', 'beige']);
            break;
        }
        case 'beige': {
            suggestColors = filterColors(['black', 'brown', 'red', 'green']);
            break;
        }
        case 'gray': {
            suggestColors = filterColors(['brown', 'green', 'gray', 'red']);
            break;
        }
        case 'sky': {
            suggestColors = filterColors(['brown', 'green', 'pink', 'purple', 'gray', 'beige']);
            break;
        }
        case 'pink': {
            suggestColors = filterColors(['black', 'beige', 'gray', 'navy']);
            break;
        }
        case 'yellow': {
            suggestColors = filterColors(['black', 'brown', 'gray', 'navy']);
            break;
        }
        case 'orange': {
            suggestColors = filterColors(['white', 'yellow', 'black', 'green']);
            break;
        }
        case 'brown': {
            suggestColors = filterColors(['white', 'beige', 'black', 'green', 'red']);
            break;
        }
        case 'navy': {
            suggestColors = filterColors(['white', 'beige', 'yellow', 'green', 'pink']);
            break;
        }
        case 'green': {
            suggestColors = filterColors(['white', 'beige', 'sky', 'yellow', 'navy', 'black']);
            break;
        }
        case 'red': {
            suggestColors = filterColors(['white', 'beige', 'sky', 'navy', 'black', 'brown']);
            break;
        }
        case 'purple': {
            suggestColors = filterColors(['white', 'beige', 'sky', 'purple', 'brown', 'pink']);
            break;
        }
        default: {
            suggestColors = [];
            break;
        }
    }

    return suggestColors;
}
