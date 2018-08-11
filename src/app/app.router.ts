import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LocksComponent} from './locks/locks.component';
import { StoveComponent } from './stove/stove.component';
import {SecComponent} from './sec/sec.component';
const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    {path: 'about', component: LocksComponent },
    {path: 'contact', component: StoveComponent },
    {path: 'portfolio', component: SecComponent }
    
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);