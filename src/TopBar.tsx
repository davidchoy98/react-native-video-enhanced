import { ReactElement } from "react";
import { View } from "react-native";

/* Custom Elements */
import { VolumeBar } from "./components/VolumeBar";
import { FullScreen } from "./components/FullScreen";

export const TopBar = ({
    volume,
    isFullscreen,
    hideVolumeBar,
    hideFullScreenButton,
    onToggleFullscreen,
    onVolumeChange
}: TopBarProps): ReactElement => {
    return (
        <View>
            <VolumeBar visible={hideVolumeBar} volume={volume} onVolumeChange={onVolumeChange} />
            <FullScreen visible={hideFullScreenButton} isFullscreen={isFullscreen} onPress={onToggleFullscreen} />
        </View>
    );
};

interface TopBarProps {
    isFullscreen: boolean;
    volume: number;

    /* UI Props */
    hideVolumeBar?: boolean;
    hideFullScreenButton?: boolean;

    /* Handlers */
    onToggleFullscreen: () => void;
    onVolumeChange: (volume: number) => void;
}