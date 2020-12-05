# Module Federation MFE Example


## Getting Started
1. Run `yarn bootstrap` to bootstrap the project
1. Run `yarn start` to get the dev server started
1. Visit `http://localhost:3000` in your browser to view the shell application

## About
This example shows using Webpack 5 Module Federation to route between multiple micro frontends.

Each lerna package has a separate webpack configuration using the Webpack ModuleFederation plugin. Each package can expose and consume modules via the config.

In a production app, configuration should be built more dynamically.  One potential solution is that a deployment server could be used to consume a manifest from a registration service.