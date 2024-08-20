import { Component } from "react";

export interface ThumbProps {
    color?: string,
    icon?: string | Component,
    size?: number,
    type?: "ant-design" | "entypo" | "evil-icons" | "feather" | "font-awesome" | "font-awesome5" | "font-awesome5-brands" | "font-awesome6" | "font-awesome6-brands" | "fontisto" | "foundation" | "ionicons" | "material-community" | "material" | "octicons" | "simple-line" | "zocial",
}