import { Routes } from '@angular/router';
import { Common } from './core/layouts/common/common';
import { Home } from './core/pages/home/home';

export const routes: Routes = [
    {
        path: '',
        component: Common,
        children: [
            {path:'',component:Home}
        ]
    }
];
