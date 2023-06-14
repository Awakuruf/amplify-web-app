/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { View } from "@aws-amplify/ui-react";
export default function Header(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="937px"
      height="573px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(250,250,250,1)"
      {...getOverrideProps(overrides, "Header")}
      {...rest}
    ></View>
  );
}
