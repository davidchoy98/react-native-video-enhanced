import { ReactElement, useEffect, useState } from "react";
import { TimerProps } from "./Timer.types";
import { Text } from "@rneui/themed";
import { TimerStyles } from "./Timer.styles";

export const Timer = ({currentTime, duration, showRemaining}: TimerProps): ReactElement<TimerProps> => {
    const [timeDisplay, setTimeDisplay] = useState("");

    useEffect(() => {
        if(showRemaining) {
            const remainingTime = duration - currentTime;
            setTimeDisplay(`-${formatTime(remainingTime)}`);
        } else {
            setTimeDisplay(formatTime(currentTime));
        }
    }, [showRemaining, currentTime]);

    const formatTime = (time: number = 0) => {
        let hours: string | undefined = undefined;
        let minutes: string = Math.floor(time / 60).toFixed(0).padStart(2, '0');
        let seconds: string = Math.floor(time % 60).toFixed(0).padStart(2, '0');
        
        if(time / 60 >= 60) {
            hours = Math.floor(time / 3600).toFixed(0).padStart(2, '0');
            minutes= Math.floor(Math.floor(time / 60) % 60).toFixed(0).padStart(2, '0');
        }

        return hours ? `${hours}:` : '' + `${minutes}:${seconds}`;
    }
    
    return (
        <Text style={TimerStyles.text}>{timeDisplay}</Text>
    );
}