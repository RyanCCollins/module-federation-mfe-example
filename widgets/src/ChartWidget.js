import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chart,
  Stack,
  Text,
} from "grommet";
import { ShareOption, Wifi } from "grommet-icons";
import PropTypes from "prop-types";
import React from "react";
import Identifier from "./Identifier";

const mockData = Array(30)
  .fill()
  .map((_, index) => {
    return {
      value: [index, Math.random() * 100],
    };
  });

const capacityWarnings = mockData.filter(
  (datum) => datum.value[1] >= 50
).length;

const gradient = [
  { value: 0, color: "status-ok" },
  { value: 33, color: "status-ok" },
  { value: 67, color: "status-warning" },
  { value: 85, color: "status-critical" },
];

const ChartWidget = () => {
  return (
    <Card height="medium" width="medium">
      <CardHeader pad="medium">
        <Identifier
          title="Network Traffic"
          subtitle="Utilization - Last 30 Days"
          icon={<Wifi color="text-strong" size="large" />}
        />
      </CardHeader>
      <CardBody margin={{ top: "small" }}>
        <KPIChart id="metric-0" data={mockData} />
      </CardBody>
      <CardFooter background="light-3" align="center" pad="small">
        <KPISummary instances={capacityWarnings} statusColor="status-warning" />
        <Button icon={<ShareOption color="plain" />} hoverIndicator />
      </CardFooter>
    </Card>
  );
};

const KPIChart = ({ data, ...rest }) => (
  <Stack>
    <Chart
      type="area"
      thickness="xxsmall"
      values={data}
      color="light-3"
      size={{ height: "small" }}
      {...rest}
    />
    <Chart
      a11yTitle="Card displaying network traffic"
      type="line"
      thickness="xxsmall"
      values={data}
      color={gradient}
      size={{ height: "small" }}
      {...rest}
    />
  </Stack>
);

KPIChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.array,
    })
  ),
};

const KPISummary = ({ instances, statusColor }) => {
  return (
    <Box direction="row" align="center" gap="small">
      <Box background={statusColor} height="12px" width="12px" round />
      <Text>{instances} instances above target</Text>
    </Box>
  );
};

KPISummary.propTypes = {
  instances: PropTypes.number,
  statusColor: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      dark: PropTypes.string,
      light: PropTypes.string,
    }),
  ]),
};

export default ChartWidget;
