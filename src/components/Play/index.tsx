import { ReactElement } from "react";
import { TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

// Types Definition
import { PlayProps } from "./Play.types";

export const Play = ({ isPlaying, color, onPress }: PlayProps): ReactElement<PlayProps> => {
    return (
        <TouchableOpacity onPress={() => onPress(!isPlaying)}>
            {isPlaying ? (
                <Icon name="pause" color={color} />
            ) : (
                <Icon name="play" color={color} />
            )}
        </TouchableOpacity>
    );
}