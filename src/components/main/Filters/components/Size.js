import React from "react";
import styled from "styled-components";

import BoxShadow from "components/shared/BoxShadow";
import Input from "components/shared/Input";

const Size = ({ iconSize, onIconSizeChange }) => (
  <Wrapper>
    <Box>
      <div>Size</div>
      <StyledBoxShadow>
        <Input
          value={iconSize}
          onChange={event => onIconSizeChange(event.target.value)}
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
  width: 45px;
  padding: 0.5em;
  border-radius: 8px;
`;

export default Size;
