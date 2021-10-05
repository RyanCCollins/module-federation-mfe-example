import { Box, Text } from "grommet";
import PropTypes from "prop-types";
import React from "react";

const Identifier = ({ title, subtitle, icon }) => (
  <Box direction="row" gap="small" align="center">
    <Box pad={{ vertical: "xsmall" }}>{icon}</Box>
    <Box>
      <Text color="text-strong" size="xlarge" weight="bold">
        {title}
      </Text>
      <Text>{subtitle}</Text>
    </Box>
  </Box>
);

Identifier.propTypes = {
  title: PropTypes.node,
  subtitle: PropTypes.node,
  icon: PropTypes.node,
};

export default Identifier;
