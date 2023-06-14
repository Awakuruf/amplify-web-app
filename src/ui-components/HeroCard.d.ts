/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type HeroCardOverridesProps = {
    HeroCard?: PrimitiveOverrideProps<ViewProps>;
    "Hi! I'm Daichi"?: PrimitiveOverrideProps<TextProps>;
    "Computer Science @ UBC"?: PrimitiveOverrideProps<TextProps>;
    "div.richText"?: PrimitiveOverrideProps<ViewProps>;
    p111?: PrimitiveOverrideProps<ViewProps>;
    "My area of focus revolve around AI, software and web development"?: PrimitiveOverrideProps<TextProps>;
    "Strong \u23F5 Mispelled \u23F5 view my work\u00A0"?: PrimitiveOverrideProps<TextProps>;
    p114?: PrimitiveOverrideProps<ViewProps>;
    "I\u2019m currently seeking for remote and/or on sight co-op opportunities in the field of software development to gain industry experience\u00A0"?: PrimitiveOverrideProps<TextProps>;
    "Strong \u23F5 Mispelled \u23F5 learn more"?: PrimitiveOverrideProps<TextProps>;
    "Feel free to reach out"?: PrimitiveOverrideProps<TextProps>;
    "I\u2019m always looking to to expand my knowledge by connecting with people and exchanging ideas!"?: PrimitiveOverrideProps<TextProps>;
    "div.appear119"?: PrimitiveOverrideProps<ViewProps>;
    Link?: PrimitiveOverrideProps<FlexProps>;
    Subtract?: PrimitiveOverrideProps<IconProps>;
    "Shoot an email"?: PrimitiveOverrideProps<TextProps>;
    "div.appear123"?: PrimitiveOverrideProps<ViewProps>;
    "Schedule a chat"?: PrimitiveOverrideProps<TextProps>;
    "union-1"?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type HeroCardProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: HeroCardOverridesProps | undefined | null;
}>;
export default function HeroCard(props: HeroCardProps): React.ReactElement;
