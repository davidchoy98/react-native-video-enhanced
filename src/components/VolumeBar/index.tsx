import { ReactElement } from "react";
import { VolumeBarProps } from "./VolumeBar.types";
import { Slider } from "@miblanchard/react-native-slider";

export const VolumeBar = ({volume, onVolumeChange}: VolumeBarProps): ReactElement => {
    const handleChangeVolume = (volume: Array<number>): void => {
        // onVolumeChange(volume);
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