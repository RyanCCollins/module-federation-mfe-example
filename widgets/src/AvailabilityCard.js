import { Box, Card, CardBody, CardFooter, Meter, Stack, Text } from "grommet";
import { StatusCriticalSmall, Wifi } from "grommet-icons";
import PropTypes from "prop-types";
import React from "react";
import Identifier from "./Identifier";

const mockAvailability = 0.872;

const AvailabilityCard = () => (
  <Card
    height="medium"
    width="medium"
    pad="medium"
    background="background-front"
    width="medium"
  >
    <CardBody>
      <Identifier
        title="Availability"
        subtitle="Uptime - Last 30 Days"
        icon={<Wifi color="text-strong" size="large" />}
      />
      <Box flex align="center" justify="center">
        <KPIMeter
          id="metric-11"
          background="background-back"
          values={[
            {
              value: mockAvailability,
              color: "graph-1",
              highlight: false,
              label: "availability",
              onClick: () => {},
            },
          ]}
          max={1}
          type="bar"
          thickness="large"
        />
      </Box>
    </CardBody>
    <CardFooter>
      <KPISummary
        message={`${mockAvailability * 100}% vs. SLA 99.5%`}
        statusColor="status-critical"
      />
    </CardFooter>
  </Card>
);

export default AvailabilityCard;

const KPIMeter = ({ values, ...rest }) => {
  const { value } = values[0];

  return (
    <Stack anchor="right">
      <Box pad={{ right: "xlarge" }}>
        <Meter
          a11yTitle="Meter displaying network availability"
          values={values}
          {...rest}
        />
      </Box>
      <Box margin="small">
        <Text size="xlarge" weight="bold">
          {value * 100}%
        </Text>
      </Box>
    </Stack>
  );
};

KPIMeter.propTypes = {
  values: PropTypes.arrayOf(PropTypes.object),
};

const KPISummary = ({ message, statusColor }) => (
  <Box direction="row" align="center" gap="small">
    <StatusCriticalSmall color={statusColor} size="small" />
    <Text>{message}</Text>
  </Box>
);

KPISummary.propTypes = {
  message: PropTypes.string,
  statusColor: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      dark: PropTypes.string,
      light: PropTypes.string,
    }),
  ]),
};
