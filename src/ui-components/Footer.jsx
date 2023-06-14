/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
export default function Footer(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1920px"
      height="313px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(250,250,250,1)"
      {...getOverrideProps(overrides, "Footer")}
      {...rest}
    >
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="500"
        color="rgba(151,151,181,1)"
        lineHeight="22.399999618530273px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="359.97px"
        height="20px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="107.11px"
        left="775px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="© 2023 Daichi Furulawa - All Rights Reserved."
        {...getOverrideProps(
          overrides,
          "\u00A9 2023 Daichi Furulawa - All Rights Reserved."
        )}
      ></Text>
    </View>
  );
}
