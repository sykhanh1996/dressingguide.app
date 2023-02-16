import React from 'react';
import { APP_PREFIX_PATH } from './AppConfig';

export interface IPublicRoutes {
    key: string;
    path: string;
    component: any;
    meta?: any;
}
export const publicRoutes: IPublicRoutes[] = [
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
    {
        key: 'dressingGuide',
        path: `${APP_PREFIX_PATH}/dressingGuide`,
        component: React.lazy(() =>
            import('../views/app-views/dressingGuide/DressingGuide').then((module) => ({
                default: module.default,
            })),
        ),
    },
];
