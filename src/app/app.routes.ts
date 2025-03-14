import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/Login.component';
import { RegisterComponent } from './register/register/register.component';
import { ChildrenListComponent } from './components/children-list/children-list.component';
import { ActivityComponent } from './components/activity/activity.component';

export const routes: Routes = [
    { path: '', component: LoginComponent }, 
    { path: 'register',component: RegisterComponent},
    { path: 'activity',component: ActivityComponent},
    {path:'child',component:ChildrenListComponent}
    
];
