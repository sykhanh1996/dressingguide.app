import React from 'react';
import { APP_PREFIX_PATH } from './AppConfig';

export const publicRoutes = [
    {
        key: 'official',
        path: `${APP_PREFIX_PATH}/main/official`,
        component: React.lazy(() =>
            import('../views/app-views/main/official/Official').then((module) => ({
                default: module.default,
            })),
        ),
        meta: {
            blankLayout: true,
        },
    },
];
