import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { CRUDComponent } from './crud/crud.component';

export const appRoutes: Routes = [
    
    { path: '', component: HomePageComponent },
    { path: 'login', component: LoginComponent },
    { path: 'crud', component: CRUDComponent }
    
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
