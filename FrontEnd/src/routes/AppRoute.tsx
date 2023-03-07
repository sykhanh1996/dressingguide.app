import { FunctionComponent, LazyExoticComponent, useEffect } from 'react';
import { RouteProps } from 'react-router-dom';

type AppRouteProps = {
    Component: React.ComponentType & any;
    routeKey: string;
    blankLayout: boolean;
};
const AppRoute = ({ Component, routeKey, blankLayout, ...props }: AppRouteProps) => {
    return <Component {...props} />;
};
export default AppRoute;
