import React from "react";
import { ReactComponent } from "/src/assets/logo.svg";
import { Text, StyledLogo } from "./styles";

export default function Logo() {
  return (
    <StyledLogo href="/">
      <ReactComponent />
      <Text>Фермерские продукты</Text>
    </StyledLogo>
  );
}
