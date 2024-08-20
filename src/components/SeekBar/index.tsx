import { ReactElement, useEffect, useState } from "react";

/* Types */
import { SeekBarProps } from "./SeekBar.types";
import { Slider } from "@rneui/themed";

export const SeekBar = ({currentTime, duration, onSeek}: SeekBarProps): ReactElement => {
    const [percentage, setPercentage] = useState<number>(0);

    useEffect(() => {
        setPercentage(Math.max(0, Math.floor(currentTime / duration)));
    }, [currentTime]);

    const handleTimeChange = (seekTo: number) => {
        onSeek(seekTo);
    };

    return (
        <Slider
            value={percentage}
            minimumValue={0}
            maximumValue={100}
            minimumTrackTintColor="#fff"
            onValueChange={(value) => handleTimeChange(value)}
        />
    );
}