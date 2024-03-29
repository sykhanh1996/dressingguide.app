import LoadingFullScreen from '@src/components/shared-components/Loading/FullScreen/LoadingFullScreen';
import Loading from '@src/components/shared-components/Loading/Loading';
import { Suspense } from 'react';
import { RouteProps } from 'react-router-dom';

export const AppLayout = ({ children }: RouteProps) => {
    return <Suspense fallback={<LoadingFullScreen />}>{children}</Suspense>;
};
