/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import Header from "./Header";
import HeroCard from "./HeroCard";
import { View } from "@aws-amplify/ui-react";
export default function HeroCardwBackground(props) {
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
      {...getOverrideProps(overrides, "HeroCardwBackground")}
      {...rest}
    >
      <Header
        width="937px"
        height="573px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0px"
        left="calc(50% - 468.5px - 0px)"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(250,250,250,1)"
        {...getOverrideProps(overrides, "Header")}
      ></Header>
      <HeroCard
        width="790px"
        height="384px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="calc(50% - 192px - -10.5px)"
        left="calc(50% - 395px - -6.5px)"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Hero Card")}
      ></HeroCard>
    </View>
  );
}
