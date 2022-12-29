import React from 'react';
import { APP_PREFIX_PATH } from './AppConfig';

export const publicRoutes = [
    {
        key: 'main',
        path: `${APP_PREFIX_PATH}/main/default`,
        component: React.lazy(() =>
            import('../views/app-views/main/default/Main').then((module) => ({
                default: module.Main,
            })),
        ),
        meta: {
            blankLayout: true,
        },
    },
];
