import { Box, Heading, Paragraph } from "grommet";
import React from "react";
const WelcomeWidget = React.lazy(() => import("widgets/WelcomeWidget"));
const ChartWidget = React.lazy(() => import("widgets/ChartWidget"));

const Dashboard = () => (
  <Box>
    <Heading>Dashboard</Heading>
    <Box gap="medium" direction="row" align="center" justify="center">
      <WelcomeWidget />
      <ChartWidget />
    </Box>
  </Box>
);

export default Dashboard;
