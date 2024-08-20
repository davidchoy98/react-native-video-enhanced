import { ReactElement } from "react";
export declare const BottomBar: ({ currentTime, duration, rate, isPlaying, rateOptions, onPlayPause, onRateChange, onSeek, }: BottomBarProps) => ReactElement;
interface BottomBarProps {
    currentTime: number;
    duration: number;
    rate: number;
    isPlaying: boolean;
    rateOptions: Array<{
        text: string;
        value: number | string;
    }>;
    onRateChange: (rate: number | string) => void;
    onSeek: (timeGap: number) => void;
    onPlayPause: () => void;
}
export {};
//# sourceMappingURL=BottomBar.d.ts.map