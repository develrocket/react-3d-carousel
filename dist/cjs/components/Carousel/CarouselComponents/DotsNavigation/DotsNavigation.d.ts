import * as React from "react";
type DotsNavigationProps = {
    items: React.ReactNode;
    selectedIndex: number;
    jumpToIndex: (index: number) => void;
    dotNavigationOutlineColor?: string;
    dotNavigationFillColor?: string;
};
export declare const DotsNavigation: (props: DotsNavigationProps) => React.JSX.Element;
export {};
