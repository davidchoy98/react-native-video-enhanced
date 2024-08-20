export interface PlayProps {
    color?: string;
    isPlaying: boolean;
    visible?: boolean;

    // Handler
    onPress: (playing: boolean) => void;
}