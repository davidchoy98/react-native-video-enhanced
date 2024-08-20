export interface FullScreenProps {
    isFullscreen: boolean;
    visible?: boolean;

    // Handler
    onPress: (fullscreen: boolean) => void;
}