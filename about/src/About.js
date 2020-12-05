import { Box, Heading, Paragraph } from 'grommet';
import React from 'react';

const About = () => (
  <Box>
    <Heading>
      About
    </Heading>
    <Paragraph>
      This page is served from a separate microfrontend. Find me in ./about/src/index.js
    </Paragraph>
  </Box>
);

export default About;
