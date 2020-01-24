import React from "react";
import styled from "styled-components";

import { device } from "constants/variables";

import Colors from "./components/Colors";
import Search from "./components/Search";
import Size from "./components/Size";
import Stroke from "./components/Stroke";

const Filters = ({
  colors,
  iconSize,
  iconStroke,
  keyword,
  onColorChange,
  onIconSizeChange,
  onIconStrokeChange,
  onKeywordChange
}) => (
  <Wrapper>
    <Segment>
      <Heading>Lepus / icons</Heading>
    </Segment>
    <Segment>
      <Search keyword={keyword} onKeywordChange={onKeywordChange}></Search>
    </Segment>
    <Segment>
      <Colors colors={colors} onColorChange={onColorChange}></Colors>
    </Segment>
    <Segment>
      <Stroke
        iconStroke={iconStroke}
        onIconStrokeChange={onIconStrokeChange}
      ></Stroke>
    </Segment>
  </Wrapper>
);

const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 80px;

  @media ${device.laptop} {
    width: 250px;
    margin-bottom: 0;
  }
`;

const Segment = styled.div`
  &:not(:last-child) {
    margin-bottom: 50px;
  }
`;

const Heading = styled.div`
  font-weight: bold;
  font-size: 20px;
`;

export default Filters;
