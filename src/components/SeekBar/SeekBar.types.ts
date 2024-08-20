export interface SeekBarProps {
    currentTime: number;
    duration: number;
    seekColor?: string;
    visible?: boolean;

    /* Handlers */
    onSeek: (seekTime: number) => void;
}