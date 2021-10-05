import { Box, Heading } from "grommet";
import React from "react";
const AvailabilityCard = React.lazy(() => import("widgets/AvailabilityCard"));
const ChartWidget = React.lazy(() => import("widgets/ChartWidget"));

const Dashboard = () => (
  <Box>
    <Heading>Dashboard</Heading>
    <Box
      gap="medium"
      direction="row"
      wrap={true}
      align="center"
      justify="center"
    >
      <AvailabilityCard />
      <ChartWidget />
    </Box>
  </Box>
);

export default Dashboard;
