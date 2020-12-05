import { Box, Heading, Paragraph } from 'grommet';
import React from 'react';

const Dashboard = () => (
  <Box>
    <Heading>
      Dashboard
    </Heading>
    <Paragraph>
      This page is served from a separate microfrontend. Find me in ./dashboard/src/index.js
    </Paragraph>
  </Box>
);

export default Dashboard;
