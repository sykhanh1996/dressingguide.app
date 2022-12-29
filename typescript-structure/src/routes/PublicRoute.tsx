import { AUTHENTICATED_ENTRY } from '@src/configs/AppConfig';
import { Navigate, Outlet } from 'react-router';

const PublicRoute = () => {
    return <Outlet />;
};

export default PublicRoute;
