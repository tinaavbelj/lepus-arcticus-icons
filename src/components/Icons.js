import React, { useState } from "react";
import styled from "styled-components";

import keywords from "constants/keywords";
import { colors as c, device, xMarginMobile } from "constants/variables";

import Filters from "./main/Filters/Filters";
import List from "./main/List/List";

const Icons = () => {
  const [colors, setColors] = useState({
    stroke: c.stroke,
    primary: c.primary,
    secondary: c.secondary,
    tertiary: c.tertiary
  });
  const [iconSize, setIconSize] = useState(32);
  const [iconStroke, setIconStroke] = useState(2);
  const [keyword, setKeyword] = useState("");

  const [filteredIcons, setFilteredIcons] = useState(Object.keys(keywords));

  const handleColorChange = (value, name) => {
    setColors(prevColors => ({ ...prevColors, [name]: value }));
  };

  const handleIconSizeChange = value => {
    setIconSize(value);
  };

  const handleIconStrokeChange = value => {
    setIconStroke(value);
  };

  const handleKeywordChange = filter => {
    const filteredIcons = Object.entries(keywords)
      .filter(item =>
        item[1].reduce(
          (match, keyword) =>
            (match |= keyword.toLowerCase().startsWith(filter.toLowerCase())),
          false
        )
      )
      .map(item => item[0]);
    setKeyword(filter);
    setFilteredIcons(filteredIcons);
  };

  return (
    <Wrapper>
      <Filters
        colors={colors}
        iconSize={iconSize}
        iconStroke={iconStroke}
        keyword={keyword}
        onColorChange={handleColorChange}
        onIconSizeChange={handleIconSizeChange}
        onIconStrokeChange={handleIconStrokeChange}
        onKeywordChange={handleKeywordChange}
      />
      <List
        colors={colors}
        iconSize={iconSize}
        iconStroke={iconStroke}
        filteredIcons={filteredIcons}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: ${xMarginMobile};
  display: flex;
  flex-direction: column;

  @media ${device.laptop} {
    padding: 80px;
    flex-direction: row;
  }
`;

export default Icons;
