import React from 'react';
import { APP_PREFIX_PATH } from './AppConfig';

export const publicRoutes = [
    {
        key: 'second',
        path: `${APP_PREFIX_PATH}/main/second`,
        component: React.lazy(() =>
            import('../views/app-views/main/second/MainSecond').then((module) => ({
                default: module.MainSecond,
            })),
        ),
        meta: {
            blankLayout: true,
        },
    },
];
