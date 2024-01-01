import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { MainComponent } from './pages/main/main.component';
import { ErrorComponent } from './pages/error/error.component';

export const routes: Routes = [
    {
        path: '',
        component: MainComponent,
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: '**',
        component: ErrorComponent
    }
];
