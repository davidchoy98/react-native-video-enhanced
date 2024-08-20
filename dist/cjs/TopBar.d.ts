import { ReactElement } from "react";
export declare const TopBar: ({ volume, isFullscreen, hideVolumeBar, hideFullScreenButton, onToggleFullscreen, onVolumeChange }: TopBarProps) => ReactElement;
interface TopBarProps {
    isFullscreen: boolean;
    volume: number;
    hideVolumeBar?: boolean;
    hideFullScreenButton?: boolean;
    onToggleFullscreen: () => void;
    onVolumeChange: (volume: number) => void;
}
export {};
//# sourceMappingURL=TopBar.d.ts.map