export interface IColorItem {
    id: string;
    color: string;
    colorName: string;
    borderColor: string;
}

export const DressingGuideData: IColorItem[] = [
    {
        color: 'rgb(34 197 94)',
        id: 'sg-green',
        colorName: 'green',
        borderColor: 'rgb(74 222 128)',
    },
    {
        color: 'rgb(59 130 246)',
        id: 'sg-blue',
        colorName: 'blue',
        borderColor: 'rgb(96 165 250)',
    },
    {
        color: 'rgb(239 68 68)',
        id: 'sg-red',
        colorName: 'red',
        borderColor: 'rgb(252 165 165)',
    },
    {
        color: 'rgb(234 179 8)',
        id: 'sg-yellow',
        colorName: 'yellow',
        borderColor: 'rgb(250 204 21)',
    },
    {
        color: 'rgb(14 165 233)',
        id: 'sg-sky',
        colorName: 'sky',
        borderColor: 'rgb(56 189 248)',
    },
    {
        color: 'rgb(107 114 128)',
        id: 'sg-gray',
        colorName: 'gray',
        borderColor: 'rgb(156 163 175)',
    },
];

export const SuggestData: IColorItem[] = [];
