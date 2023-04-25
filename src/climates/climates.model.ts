export interface Climate {
    id: string;
    type: ClimateType;
    value: number;
    time: Date;
}

export enum ClimateType {
    TEMP = 'temp',
    LIGHT = 'light',
    HUMID = 'humid',
    SOIL = 'soil'
}