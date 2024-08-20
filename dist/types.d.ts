import { VideoProperties } from 'react-native-video';

interface VideoPlayerProps extends VideoProperties  {
    rateOptions: Array<{ text: string, value: number | string }>;

    /* Hide the Play / Pause Button */
    hidePlayPause?: boolean;

    /* Hide the Seek Bar */
    hideSeekBar?: boolean;

    /* Hide the Volume Adjuster Bar */
    hideVolumeBar?: boolean;

    /* Hide the Fast Forward Button */
    hideSeekForward?: boolean;

    /* Hide the Backward Button */
    hideSeekBackward?: boolean;

    /* Hide the Full Screen Toggle Button */
    hideFullScreen?: boolean;
}

export type { VideoPlayerProps };
