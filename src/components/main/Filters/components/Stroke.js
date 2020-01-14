import React from "react";
import styled from "styled-components";

import BoxShadow from "components/shared/BoxShadow";
import Input from "components/shared/Input";

const Stroke = ({ iconStroke, onIconStrokeChange }) => (
  <Wrapper>
    <Box>
      <div>Stroke</div>
      <StyledBoxShadow>
        <Input
          value={iconStroke}
          onChange={event => onIconStrokeChange(event.target.value)}
        />
      </StyledBoxShadow>
    </Box>
  </Wrapper>
);

const Wrapper = styled.div``;

const Box = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledBoxShadow = styled(BoxShadow)`
  padding: 0.5em;
  border-radius: 8px;
  width: 45px;
`;

export default Stroke;
