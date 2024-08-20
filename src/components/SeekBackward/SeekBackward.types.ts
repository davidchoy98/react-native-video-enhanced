export interface SeekBackwardProps {
    currentTime: number;
    seekTime?: number;
    visible?: boolean;
    onSeek: (timeGap: number) => void;
}