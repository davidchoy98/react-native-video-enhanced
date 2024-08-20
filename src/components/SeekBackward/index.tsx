import { ReactElement, useState } from "react";
import { TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

/* Types */
import { SeekBackwardProps } from "./SeekBackward.types";
import { scale } from "react-native-size-matters";

export const SeekBackward = ({currentTime, seekTime, onSeek}: SeekBackwardProps): ReactElement => {
    const [seekForwardGap] = useState<number>(seekTime || 15);

    return (
        <TouchableOpacity onPress={() => onSeek(currentTime-seekForwardGap)}>
            <Icon name="backward" size={scale(10)} />
        </TouchableOpacity>
    );
}