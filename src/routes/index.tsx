import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

// Component
import Header from 'layout/Header';

// Routes
import publicRoutes from 'routes/publicRoutes';
import privateRoutes from 'routes/privateRoutes';

// Services
import useAuth from 'services/useAuth';

// Some folks find value in a centralized route config.
// A route config is just data. React is great at mapping
// data into components, and <Route> is a component.

// Our route config is just an array of logical "routes"
// with `path` and `component` props, ordered the same
// way you'd do inside a `<Switch>`.

function RouteWithHeader({ path, component: Component }: { path: string, component: any }) {
  return (
    <Route path={path}>
      <Header role='role' />
      <Component />
    </Route>
  );
}

export default function Routes() {
  const isAuthenticated = useAuth();
  // const isAuthenticated = false;
  const routes = isAuthenticated ? privateRoutes : publicRoutes;

  return (
    <BrowserRouter>
      <Switch>
        {routes.map((route, i) => (
          <RouteWithHeader key={i} {...route} />
        ))}
      </Switch>
    </BrowserRouter>
  );
}
