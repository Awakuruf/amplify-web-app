/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
import { LinkedinProps } from "./Linkedin";
import { GithubProps } from "./Github";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NavOverridesProps = {
    Nav?: PrimitiveOverrideProps<ViewProps>;
    "div.appear130"?: PrimitiveOverrideProps<ViewProps>;
    "div.appear131"?: PrimitiveOverrideProps<ViewProps>;
    "Button \u23F5 Link \u23F5 Daichi Furukawa"?: PrimitiveOverrideProps<TextProps>;
    "Button \u23F5 Work"?: PrimitiveOverrideProps<TextProps>;
    "Button \u23F5 Link \u23F5 About"?: PrimitiveOverrideProps<TextProps>;
    "div.appear139"?: PrimitiveOverrideProps<ViewProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
    Resume?: PrimitiveOverrideProps<TextProps>;
    linkedin?: LinkedinProps;
    github?: GithubProps;
} & EscapeHatchProps;
export declare type NavProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: NavOverridesProps | undefined | null;
}>;
export default function Nav(props: NavProps): React.ReactElement;
