/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { HeaderProps } from "./Header";
import { HeroCardProps } from "./HeroCard";
import { ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type HeroCardwBackgroundOverridesProps = {
    HeroCardwBackground?: PrimitiveOverrideProps<ViewProps>;
    Header?: HeaderProps;
    "Hero Card"?: HeroCardProps;
} & EscapeHatchProps;
export declare type HeroCardwBackgroundProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: HeroCardwBackgroundOverridesProps | undefined | null;
}>;
export default function HeroCardwBackground(props: HeroCardwBackgroundProps): React.ReactElement;
