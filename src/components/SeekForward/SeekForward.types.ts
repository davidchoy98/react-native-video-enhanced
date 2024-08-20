export interface SeekForwardProps {
    currentTime: number;
    seekTime?: number;
    visible?: boolean;
    onSeek: (timeGap: number) => void;
}