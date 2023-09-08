import { Route } from '@angular/router';

export const APP_ROUTES: Route[] = [
    {
        path:'',
        loadChildren: () => import('@home-page').then((c) => c.HOMEPAGE_ROUTES)
    }
];
