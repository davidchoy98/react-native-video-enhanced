import { ReactElement } from "react";
import { FullScreenProps } from "./FullScreen.types";
import { TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export const FullScreen = ({isFullscreen, onPress}: FullScreenProps): ReactElement => {
    return (
        <TouchableOpacity onPress={() => onPress(!isFullscreen)}>
            {isFullscreen ? (
                <Icon name="compress" />
            ) : (
                <Icon name="expand" />
            )}
        </TouchableOpacity>
    );
}