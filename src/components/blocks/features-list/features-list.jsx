import React from "react";
import FeatureCard from "/src/components/ui/feature-card/feature-card";
import { Ul, Li } from "/src/components/styled";
import { Features, StyledTitle, StyledButton } from "./styles";
import { AppRoute } from "/src/const";

function FeaturesList({ features }) {
  return features && features.length ? (
    <Features>
      <StyledTitle as="h2">Почему фермерские продукты лучше?</StyledTitle>
      <Ul $isGridList>
        {features.map((feature) => (
          <Li key={feature.id}>
            <FeatureCard {...feature} />
          </Li>
        ))}
      </Ul>
      <StyledButton link={AppRoute.ORDER}>Купить</StyledButton>
    </Features>
  ) : null;
}

export default FeaturesList;
