import { FC, ReactElement, useEffect, useMemo } from "react";
import { BarProps } from "./Bar.types";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import { Animated } from "react-native";
import { Thumb } from "../Thumb";

export const Bar: FC<BarProps> = ({disabled, currentTime, duration}): ReactElement => {
    const isScrubbingInter = new Animated.Value(0);
    const previousXCoord = new Animated.Value(0);
    const progress = new Animated.Value(0);
    const snappingEnabled = snapToStep && step;

    const hitSlop = {
        top: 12,
        bottom: 12
    }

    useEffect(() => {
        progress.value = currentTime / duration;

    }, [currentTime]);

    const defaultThumb = useMemo(() => {
        if(!snappingEnabled) {
            return 0;
        }

        const index = Math.round()
    });

    const handleOnGesture = useMemo(() => {
        const gesture = Gesture.Pan().hitSlop(hitSlop)
            .onStart(() => {
                if(disabled) {
                    return;
                }


            })
    });

    const handleOnLayout = 

    return (
        <GestureDetector gesture={gesture}>
            <Animated.View hitSlop={hitSlop} onLayout={handleOnLayout}>
                <Animated.View>
                    <Animated.View />
                    <Animated.View />
                    <Animated.View />
                </Animated.View>
                <Animated.View>
                    <Thumb />
                </Animated.View>
            </Animated.View>
        </GestureDetector>
    );
} 