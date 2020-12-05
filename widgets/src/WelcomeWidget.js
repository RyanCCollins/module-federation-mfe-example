import React from "react";
import { Card, CardHeader, CardBody, CardFooter } from "grommet";

const WelcomeWidget = () => {
  return (
    <Card height="medium" width="medium" background="light-1">
      <CardHeader pad="medium">
        Welcome Widget
      </CardHeader>
      <CardBody pad="medium">
        Welcome! I am a widget served from a micro frontend!
      </CardBody>
      <CardFooter pad="medium" background="light-2">
        Very cool!
      </CardFooter>
    </Card>
  );
};

export default WelcomeWidget;