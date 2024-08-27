import { ReactElement, useState } from "react";
import { RateProps } from "./Rate.types";
import { TouchableOpacity } from "react-native";
import { Menu, Provider, Text } from "react-native-paper";

export const Rate = ({rate, rateOptions, onRateChange}: RateProps): ReactElement<RateProps> => {
    const [showPopup, setShowPopup] = useState<boolean>(false);

    const showRateSelector = (show: boolean | undefined = true): void => {
        setShowPopup(show);
    };

    const onSelectRate = (value: number | string): void => {
        onRateChange(value);
        setShowPopup(false);
    };

    return (
        <Provider>
            <Menu
                visible={showPopup}
                onDismiss={() => showRateSelector(false)}
                anchor={
                    <TouchableOpacity onPress={() => showRateSelector()}>
                        <Text>{rate}x</Text>
                    </TouchableOpacity>
                }
            >
                {rateOptions.map((option) => (
                    <Menu.Item
                        title={`${option.text}x`}
                        onPress={() => onSelectRate(option.value)}
                    />
                ))}
            </Menu>
        </Provider>
    );
}