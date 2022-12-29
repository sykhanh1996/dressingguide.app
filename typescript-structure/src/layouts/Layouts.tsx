import Loading from '@src/components/shared-components/Loading/Loading';
import { Views } from '@src/views/Views';
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
            <Layout>
                <div>test</div>
                <Views />
            </Layout>
        </Suspense>
    );
};
