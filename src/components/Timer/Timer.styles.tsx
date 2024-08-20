import { ScaledSheet, TextStyle } from "react-native-size-matters";

interface Styles {
    text: TextStyle
}

export const TimerStyles:
    ReturnType<typeof ScaledSheet.create<Styles>> =
ScaledSheet.create<Styles>({
    text: {
        fontSize: '10@ms'
    }
});