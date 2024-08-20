import { ReactElement, useState } from "react";
import { RateProps } from "./Rate.types";
import { TouchableOpacity } from "react-native";
import { ListItem, Text, Tooltip } from "@rneui/themed";

export const Rate = ({rate, rateOptions, onRateChange}: RateProps): ReactElement<RateProps> => {
    const [showPopup, setShowPopup] = useState<boolean>(false);

    const showRateSelector = (show: boolean | undefined = true): void => {
        setShowPopup(show);
    };

    const onSelectRate = (value: number | string): void => {
        onRateChange(value);
        setShowPopup(false);
    };

    const renderPopover = (): ReactElement => {
        return (
            <ListItem>
                {rateOptions.map((option) => (
                    <ListItem.Content>
                        <TouchableOpacity onPress={() => onSelectRate(option.value)}>
                            {option.text}x
                        </TouchableOpacity>
                    </ListItem.Content>
                ))}
            </ListItem>
        );
    }

    return (
        <>
            <TouchableOpacity onPress={() => showRateSelector()}>
                <Text>{rate}x</Text>
            </TouchableOpacity>
            <Tooltip
                visible={showPopup}
                onClose={() => showRateSelector(false)}
                popover={renderPopover()}
            />
        </>
    );
}