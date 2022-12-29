import Loading from '@src/components/shared-components/Loading/Loading';
import { Layout } from 'antd';
import { Suspense } from 'react';
import { RouteProps } from 'react-router-dom';

export const AppLayout = ({ children }: RouteProps) => {
    return (
        <Layout>
            <Suspense fallback={<Loading />}>{children}</Suspense>
        </Layout>
    );
};
