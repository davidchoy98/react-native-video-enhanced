import { FC, useEffect, useRef, useState } from "react";
import { TouchableWithoutFeedback, View } from "react-native";
import Video, { OnLoadData, VideoProperties } from "react-native-video";

// Components
import { TopBar } from "./TopBar";
import { BottomBar } from "./BottomBar";

// Types
import type { VideoPlayerProps } from './VideoPlayerProps';

export const VideoPlayer: FC<VideoPlayerProps> = (props) => {
    const {
        currentTime,
        hideFullScreen,
        hideVolumeBar,
        rateOptions,
        resizeMode,
        volume: initialVolume,
        paused: initialPaused,
        muted: initialMuted,
        rate: initialRate,
        fullscreen: initialFullscreen,
    } = props;

    const videoPlayerRef = useRef<Video>(null);

    // States
    const [duration, setDuration] = useState<number>(0);
    const [volume, setVolume] = useState<number>(initialVolume || 100);
    const [paused, setPaused] = useState<boolean>(initialPaused || true);
    const [muted, setMuted] = useState<boolean>(initialMuted || false);
    const [rate, setRate] = useState<number>(initialRate || 1);
    const [isFullScreen, setIsFullScreen] = useState<boolean>(initialFullscreen || false);

    useEffect(() => {
        setMuted(volume === 0);
    }, [volume]);

    const handleOnPlayPause = (paused: boolean = false): void => {
        setPaused(paused);
    };

    const handleVolumeChange = (volume: number): void => {
        setVolume(volume);
    };

    const handleToggleFullScreen = (): void => {
        setIsFullScreen(!isFullScreen);
    };

    const handleRateChange = (rate: number | string): void => {
        if(!isNaN(parseInt(rate.toString()))) {
            setRate(parseInt(rate.toString()));
        }
    };

    const handleOnLoad = (data: OnLoadData): void => {
        if(data) {
            setDuration(data.duration);
        }
    };

    const handleSeek = (timeGap: number): void => {
        if(videoPlayerRef?.current) {
            videoPlayerRef.current.seek(timeGap);
        }
    };

    return (
        <TouchableWithoutFeedback>
            <View>
                <Video
                    ref={videoPlayerRef}
                    muted={muted}
                    resizeMode={resizeMode}
                    onLoad={handleOnLoad}
                    {...props}
                />
                <TopBar
                    isFullscreen={isFullScreen}
                    volume={volume}
                    hideFullScreenButton={hideFullScreen}
                    hideVolumeBar={hideVolumeBar}
                    onToggleFullscreen={handleToggleFullScreen}
                    onVolumeChange={handleVolumeChange}
                />
                <BottomBar
                    currentTime={currentTime || 0}
                    duration={duration}
                    rate={rate}
                    isPlaying={!paused}
                    rateOptions={rateOptions}
                    onRateChange={handleRateChange}
                    onPlayPause={handleOnPlayPause}
                    onSeek={handleSeek}
                />
            </View>
        </TouchableWithoutFeedback>
    );
}