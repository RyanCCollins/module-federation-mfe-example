import React from "react";
const AppShell = React.lazy(() => import("shell/AppShell"));

const App = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <AppShell />
  </React.Suspense>
);

export default App;
