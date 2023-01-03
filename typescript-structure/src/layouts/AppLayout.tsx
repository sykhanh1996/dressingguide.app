import Loading from '@src/components/shared-components/Loading/Loading';
import { Layout } from 'antd';
import { Content } from 'antd/es/layout/layout';
import { Suspense } from 'react';
import { RouteProps } from 'react-router-dom';

export const AppLayout = ({ children }: RouteProps) => {
    return (
        <Layout>
            <Content>
                <Suspense fallback={<Loading />}>{children}</Suspense>
            </Content>
        </Layout>
    );
};
