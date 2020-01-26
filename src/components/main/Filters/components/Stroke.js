import React from "react";
import styled from "styled-components";

import Slider from "@material-ui/core/Slider";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const Stroke = ({ iconStroke, onIconStrokeChange }) => {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#000000"
      }
    }
  });

  return (
    <Wrapper>
      <Box>
        <Heading>stroke width</Heading>
        <div>{iconStroke}</div>
      </Box>
      <MuiThemeProvider theme={theme}>
        <Slider
          defaultValue={iconStroke}
          min={1}
          max={3}
          step={0.5}
          onChange={(event, value) => onIconStrokeChange(value)}
        />
      </MuiThemeProvider>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const Heading = styled.div`
  margin: 0 0 8px 4px;
  font-weight: bold;
`;

const Box = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

export default Stroke;
