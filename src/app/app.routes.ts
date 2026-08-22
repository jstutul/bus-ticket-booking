import { Routes } from '@angular/router';
import { Common } from './core/layouts/common/common';
import { Home } from './core/pages/home/home';
import { Search } from './core/pages/search/search';

export const routes: Routes = [
    {
        path: '',
        component: Common,
        children: [
            { path: '', component: Home },
            {path:'search',component:Search}
        ]
    }
];
