import React from "react";
import { Text } from "react-native";
import { Type } from "./styles";

export default function Tag(props) {
  return (
    <>
      <Type>{props.name}</Type>
    </>
  );
}
