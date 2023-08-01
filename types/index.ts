import { MouseEventHandler } from "react";

/* The code is defining an interface called `CustomButtonProps`. This interface specifies the props
that can be passed to a custom button component. */
export interface CustomButtonProps {
    title: string;
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btntype?: "button" | "submit"
}

export interface SearchManufacturerProps {
    manufacturer: string;
    setManufacturer: (manufacturer: string ) => void;
}