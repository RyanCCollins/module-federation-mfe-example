import { Box, Heading, Paragraph } from "grommet";
import React from "react";
const SharedButton = React.lazy(() => import("shell/SharedButton"));

const About = () => (
  <Box>
    <Heading>About</Heading>
    <Paragraph>
      This page is served from a separate microfrontend. Find me in
      ./about/src/index.js
    </Paragraph>
    <Box width="medium">
      <SharedButton />
    </Box>
  </Box>
);

export default About;
