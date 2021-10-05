import { Box, RoutedAnchor as Anchor, Text } from "grommet";
import React from "react";

const Navigation = () => {
  return (
    <Box
      justify="between"
      pad="medium"
      background="white"
      direction="row"
      elevation="small"
    >
      <Box fill="horizontal" direction="row" align="center" justify="between">
        <Anchor path="/">
          <Box direction="row" align="center">
            <Box
              direction="row"
              gap="xsmall"
              align="baseline"
              margin={{ bottom: "1.5px" }}
            >
              <Text size="large" weight="bold">
                Module Federation
              </Text>
            </Box>
          </Box>
        </Anchor>
        <Box align="center" gap="small" direction="row">
          <Anchor label="About" path="/about" />
        </Box>
      </Box>
    </Box>
  );
};

export default Navigation;
