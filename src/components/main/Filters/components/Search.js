import React from "react";
import styled from "styled-components";

import BoxShadow from "components/shared/BoxShadow";
import Input from "components/shared/Input";

const Search = ({ keyword, onKeywordChange }) => (
  <div>
    <StyledBoxShadow hover>
      <Input
        value={keyword}
        onChange={event => onKeywordChange(event.target.value)}
        placeholder="Search"
      />
    </StyledBoxShadow>
  </div>
);

const StyledBoxShadow = styled(BoxShadow)`
  padding: 1em;
  border-radius: 8px;
`;

export default Search;
