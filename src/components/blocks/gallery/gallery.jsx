import React from "react";
import { TitleSize } from "/src/components/ui/title/title";
import { StyledSection, StyledTitle } from "/src/components/styled";

// Галерея котокафе
function ShopGallery() {
  return (
    <StyledSection>
      <StyledTitle level={2} size={TitleSize.BIG}>
        Галерея нашего магазина
      </StyledTitle>
    </StyledSection>
  );
}

export default ShopGallery;
