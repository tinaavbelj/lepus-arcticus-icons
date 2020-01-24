import React from "react";
import styled from "styled-components";

import { device } from "constants/variables";

import Icon from "./Icon";
import BoxShadow from "components/shared/BoxShadow";

const List = ({ colors, iconSize, iconStroke, filteredIcons }) => {
  const handleDownloadIcon = name => {
    const svg = document.querySelector(`#icon-${name}`);
    const data = svg.outerHTML;
    const blob = new Blob([data], { type: "image/svg+xml" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${name}.svg`;
    link.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <Wrapper>
      {filteredIcons.map((name, i) => (
        <Item key={i} onClick={() => handleDownloadIcon(name)}>
          <IconWrapper>
            <Icon
              colors={colors}
              iconSize={iconSize}
              iconStroke={iconStroke}
              name={name}
            ></Icon>
          </IconWrapper>
          <IconInformation>{name}</IconInformation>
        </Item>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));

  @media ${device.laptop} {
    width: calc(100% - 250px - 120px);
    margin-left: 120px;
  }
`;

const IconWrapper = styled(BoxShadow)`
  width: 100px;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  transition: box-shadow 0.2s ease-out;
`;

const Item = styled.div`
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;

  &:hover {
    ${IconWrapper} {
      box-shadow: 5px 5px 12px #dddddd;
    }
  }
`;

const IconInformation = styled.div`
  margin-top: 1em;
  font-size: 12px;
`;

export default List;
