export interface RateProps {
    rate?: number;
    rateOptions: Array<{ text: string, value: number | string }>;
    visible?: boolean;
    onRateChange: (rate: number | string) => void;
}