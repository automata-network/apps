import BN from 'bn.js';
export interface Props {
    className?: string;
    validatorId: string;
}
export declare type LineDataEntry = (BN | number)[];
export declare type LineData = LineDataEntry[];
export interface ChartInfo {
    chart: LineData;
    labels: string[];
}
