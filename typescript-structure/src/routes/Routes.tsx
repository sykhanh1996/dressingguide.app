import { AUTHENTICATED_ENTRY } from '@src/configs/AppConfig';
import { publicRoutes } from '@src/configs/RoutesConfig';
import { Routes as RouterRoutes, Route, Navigate } from 'react-router-dom';
import AppRoute from './AppRoute';
import PublicRoute from './PublicRoute';

const Routes = () => {
    return (
        <RouterRoutes>
            <Route path="/" element={<PublicRoute />}>
                <Route path="/" element={<Navigate replace to={AUTHENTICATED_ENTRY} />} />
                {publicRoutes.map((route, index) => {
                    return (
                        <Route
                            key={route.key + index}
                            path={route.path}
                            element={<AppRoute routeKey={route.key} Component={route.component} {...route.meta} />}
                        />
                    );
                })}
                <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
        </RouterRoutes>
    );
};

export default Routes;
