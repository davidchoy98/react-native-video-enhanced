import { ReactElement } from "react";
import { SeekBackward } from "./components/SeekBackward";
import { Play } from "./components/Play";
import { SeekForward } from "./components/SeekForward";
import { Rate } from "./components/Rate/Rate";
import { Timer } from "./components/Timer";
import { View } from "react-native";

export const BottomBar = ({
    currentTime,
    duration,
    rate,
    isPlaying,
    rateOptions,
    onPlayPause,
    onRateChange,
    onSeek,
}: BottomBarProps): ReactElement => {
    return (
        <View>
            <View>
                <SeekBackward currentTime={currentTime} onSeek={onSeek} />
                <Play isPlaying={isPlaying} onPress={onPlayPause} />
                <SeekForward currentTime={currentTime} onSeek={onSeek} />
            </View>
            <Rate rate={rate} rateOptions={rateOptions} onRateChange={onRateChange} />
            <Timer currentTime={currentTime} duration={duration} />
        </View>
    );
};

interface BottomBarProps {
    currentTime: number;
    duration: number;
    rate: number;
    isPlaying: boolean;

    rateOptions: Array<{text: string, value: number | string}>;

    /* Handlers */
    onRateChange: (rate: number | string) => void;
    onSeek: (timeGap: number) => void;
    onPlayPause: () => void;
}