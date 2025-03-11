import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  { path: '', component: RegisterComponent }, // Default route
  { path: 'login', component: LoginComponent } // Login route
];