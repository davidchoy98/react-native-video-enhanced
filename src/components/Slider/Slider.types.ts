import { Component } from "react";

export interface SliderProps {
    min: number,
    max: number,
    step?: number,
    icon?: string | Component,
    type?: string
}