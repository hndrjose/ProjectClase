import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';
import { LoginGuardGuard } from '../service/service.index';


// pages
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountSettingComponent } from './account-setting/account-setting.component';






const pagesRouter: Routes = [
    {
        path: '',
        component: PagesComponent,
        canActivate: [ LoginGuardGuard ],
        children: [
            { path: 'account', component: AccountSettingComponent },
            { path: 'dashboard', component: DashboardComponent },
        { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
        ]
    },
];

export const PAGES_ROUTES = RouterModule.forChild( pagesRouter );
