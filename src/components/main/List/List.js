import React from "react";
import styled from "styled-components";

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
            <IconContainer>
              <Icon
                colors={colors}
                iconSize={iconSize}
                iconStroke={iconStroke}
                name={name}
              ></Icon>
            </IconContainer>
          </IconWrapper>
          <IconInformation>{name}</IconInformation>
        </Item>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 80%;
  padding-left: 120px;
  display: flex;
  flex-wrap: wrap;
`;

const IconWrapper = styled(BoxShadow)`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  transition: box-shadow 0.2s ease-out;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 2em;
  cursor: pointer;

  &:hover {
    ${IconWrapper} {
      box-shadow: 5px 5px 12px #dddddd;
    }
  }
`;

const IconContainer = styled.div`
  margin: 1em;
`;

const IconInformation = styled.div`
  margin-top: 1em;
  font-size: 12px;
`;

export default List;
