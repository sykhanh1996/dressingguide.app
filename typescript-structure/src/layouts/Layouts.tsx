import LoadingFullScreen from '@src/components/shared-components/Loading/FullScreen/LoadingFullScreen';
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
        <Suspense fallback={<LoadingFullScreen />}>
            <Layout>
                <Views />
            </Layout>
        </Suspense>
    );
};
