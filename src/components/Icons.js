import React, { useState } from "react";
import styled from "styled-components";

import Filters from "./main/Filters/Filters";
import List from "./main/List/List";
import keywords from "constants/keywords";

const Icons = () => {
  const [colors, setColors] = useState({
    stroke: "#000000",
    primary: "#42C1F4",
    secondary: "#EF9CBA",
    tertiary: "#F2E1E7"
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
  display: flex;
  padding: 80px;
`;

export default Icons;
