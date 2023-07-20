import * as React from "react";
type CarouselProps = {
    arrows: boolean;
    dotsNavigation: boolean;
    dotsNavigationInside?: boolean;
    dotNavigationOutlineColor?: string;
    dotNavigationFillColor?: string;
    children?: React.ReactNode;
    width: string;
    height: string;
    autoScrollInterval?: number;
    autoScrollClickDelay?: number;
    carouselStyle?: "flat" | "3d";
    outOfFocusDarken?: boolean;
};
export type CarouselControllerHandle = {
    shiftLeft: () => void;
    shiftRight: () => void;
    jumpToIndex: (index: number) => void;
};
declare const Carousel: React.ForwardRefExoticComponent<CarouselProps & React.RefAttributes<CarouselControllerHandle>>;
export default Carousel;
