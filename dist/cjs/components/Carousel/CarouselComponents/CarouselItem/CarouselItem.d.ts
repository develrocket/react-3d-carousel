import * as React from "react";
type CarouselItemProps = {
    isShowing: boolean;
    children?: React.ReactNode;
    height: string;
    outOfFocusDarken: boolean;
};
export declare const CarouselItem: (props: CarouselItemProps) => React.JSX.Element;
export {};
