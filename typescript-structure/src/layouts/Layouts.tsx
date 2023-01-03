import Loading from '@src/components/shared-components/Loading/Loading';
import { Views } from '@src/views/Views';
import { Col, Row } from 'antd';
import { lazy, Suspense } from 'react';

const AppLayout = lazy(() =>
    import('./AppLayout').then((module) => ({
        default: module.AppLayout,
    })),
);

export const Layouts = () => {
    const Layout = AppLayout;

    return (
        <Suspense fallback={<Loading />}>
            <Row justify="center">
                <Col span={16}>
                    <Layout>
                        <Views />
                    </Layout>
                </Col>
            </Row>
        </Suspense>
    );
};
