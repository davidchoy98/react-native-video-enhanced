import { ReactElement } from "react";
import { VolumeBarProps } from "./VolumeBar.types";
import { Slider } from "@rneui/themed";

export const VolumeBar = ({volume, onVolumeChange}: VolumeBarProps): ReactElement => {
    const handleChangeVolume = (volume: number): void => {
        onVolumeChange(volume);
    };

    return (
        <Slider
            value={volume}
            minimumValue={0}
            maximumValue={100}
            step={1}
            minimumTrackTintColor="#fff"
            onValueChange={(value) => handleChangeVolume(value)}
        />
    );
}