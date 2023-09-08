import { Route } from '@angular/router';

import {HomeComponent} from '@home-page'

export const appRoutes: Route[] = [
    {
        path:'',
        component: HomeComponent,
        pathMatch: 'full'
    }
];
