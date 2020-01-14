import React from "react";
import styled from "styled-components";

import BoxShadow from "components/shared/BoxShadow";
import Input from "components/shared/Input";

const Color = ({ name, colorCode, onColorChange }) => {
  return (
    <Wrapper>
      <Heading>{name}</Heading>
      <BoxShadow borderRadius="8px" hover>
        <ColorPreview colorCode={colorCode}></ColorPreview>
        <ColorText>
          <Input
            value={colorCode}
            onChange={event => onColorChange(event.target.value, name)}
          />
        </ColorText>
      </BoxShadow>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 90px;
  margin-bottom: 30px;
`;

const Heading = styled.div`
  margin: 0 0 8px 4px;
  font-size: 12px;
  font-weight: bold;
`;

const ColorPreview = styled.div`
  height: 50px;
  border-radius: 8px 8px 0 0;
  background-color: ${({ colorCode }) => colorCode};
`;

const ColorText = styled.div`
  padding: 8px;
`;

export default Color;
