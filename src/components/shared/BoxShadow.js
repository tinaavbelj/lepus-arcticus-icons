import styled from "styled-components";

const BoxShadow = styled.div`
  box-shadow: 5px 5px 12px #ededed;
  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : "0")};
  transition: box-shadow 0.2s ease-out;

  &:hover {
    box-shadow: ${({ hover }) => hover && "5px 5px 12px #dddddd"};
  }
`;

export default BoxShadow;
