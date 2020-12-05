import { Grommet, grommet } from "grommet";
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navigation from "./Navigation";
const Dashboard = React.lazy(() => import("dashboard/Dashboard"));
const About = React.lazy(() => import("about/About"));

const AppShell = () => (
  <Grommet theme={grommet} full={true}>
    <Navigation />
    <Box fill pad="small">
      <BrowserRouter>
        <React.Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="dashboard/*" element={<Dashboard />} />
            <Route path="about/*" element={<About />} />
            <Route path="*" element={<Navigate to="/dashboard" replace />} />
          </Routes>
        </React.Suspense>
      </BrowserRouter>
    </Box>
  </Grommet>
);

export default AppShell;
