import React from "react";
import styled from "styled-components";

import Color from "./Color";

const Colors = ({ colors, onColorChange }) => (
  <Wrapper>
    {Object.keys(colors).map(colorName => (
      <Color
        key={colorName}
        name={colorName}
        colorCode={colors[colorName]}
        onColorChange={onColorChange}
      ></Color>
    ))}
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export default Colors;
