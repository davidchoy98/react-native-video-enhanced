import { ComponentType, FC, ReactElement, useEffect, useState } from "react";
import { ThumbProps } from "./Thumb.types";

export const Thumb: FC<ThumbProps> = ({color, icon, size, type}): ReactElement => {
    const [Icon, setIcon] = useState<ComponentType<{name: string, size?: number, color?: string}> | null>(null);

    useEffect(() => {
        const load = async () => {
            let font = 'FontAwesome';
    
            if(type) {
                if(["ant-design", "evil-icons", "font-awesome", "font-awesome5", "font-awesome5-brands", "font-awesome6", "font-awesome6-brands"].indexOf(type) !== -1) {
                    font = type.split('-').map((string) => (string.charAt(0).toUpperCase() + string.substring(1))).join('');
                } else if(["entypo", "feather", "fontisto", "foundation", "ionicons", "octicons", "zocial"].indexOf(type) !== -1) {
                    font = type.charAt(0).toLocaleUpperCase() + type.substring(1);
                } else if (["material-community", "material", "simple-line"].indexOf(type) !== -1) {
                    font = type.split('-').map((string) => (string.charAt(0) + string.substring(1))).join('') + 'Icons';
                }
            }
    
            const Element = await import(`react-native-vector-icons/${font}`);
            setIcon(Element.default || Element)
        };

        load();
    }, [type]);

    return Icon ? <Icon name={`${icon}`} color={color} size={size} /> : <></>;
}