import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';

interface IPrivateRouteProps extends RouteProps {
  ProtectedComponent: React.FC<any> | React.ComponentClass<any, any>;
}

const PrivateRoute: React.FC<IPrivateRouteProps> = ({
  ProtectedComponent,
  ...rest
}) => {
  let authToken = '';
  const savedToken = localStorage.getItem('token');
  if (savedToken) {
    authToken = JSON.parse(savedToken);
  }
  return (
    <Route
      {...rest}
      render={({ location, ...restRouterProps }) =>
        authToken ? (
          <ProtectedComponent {...restRouterProps} location={location} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
