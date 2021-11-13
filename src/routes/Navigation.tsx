import { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect,
} from 'react-router-dom';

import logo from '../logo.svg';
import { routes } from './routes';

export const Navigation = () => {
  return (
    <Suspense fallback={null}>
      <Router>
        <div className="main-layout">
          <nav>
              <img src={ logo } alt="React Logo" />
            <ul>
              {routes.map(route => (
                <li key={route.path}>
                  <NavLink to={route.path} activeClassName="nav-active" exact>{route.name}</NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            {routes.map(route => <Route key={route.path} {...route}/>)}
            <Redirect to={routes[0].path}/>
          </Switch>
        </div>
      </Router>
    </Suspense>
  );
}