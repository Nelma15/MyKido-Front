import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/Login.component';
import { RegisterComponent } from './register/register/register.component';
import { ChildrenListComponent } from './components/children-list/children-list.component';
import { ActivityComponent } from './components/activity/activity.component';
import { ChildactivityComponent } from './components/childactivity/childactivity.component';

export const routes: Routes = [
    { path: '', component: LoginComponent }, 
    { path: 'register',component: RegisterComponent},
    { path: 'activity',component: ActivityComponent, data: { title: 'Saisi Activité Enfant' }},
    { path: 'activityList',component: ChildactivityComponent},
    {path:'child',component:ChildrenListComponent, data: { title: 'Mes Outils' }}
    

    
];
