import { ReactElement, useState } from "react";
import { TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

/* Types */
import { SeekForwardProps } from "./SeekForward.types";
import { scale } from "react-native-size-matters";

export const SeekForward = ({currentTime, seekTime, onSeek}: SeekForwardProps): ReactElement => {
    const [seekForwardGap] = useState<number>(seekTime || 15);

    return (
        <TouchableOpacity onPress={() => onSeek(currentTime + seekForwardGap)}>
            <Icon name="forward" size={scale(10)} />
        </TouchableOpacity>
    );
}