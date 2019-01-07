import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AdminComponent } from './admin/admin.component';
import { ResultsComponent } from './results/results.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {AuthGuard} from './guards/auth.guard';
import { ChildTestComponent } from './child-test/child-test.component';

const routes: Routes = [
  {path:'',redirectTo:"/home",pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:"admin",component:AdminComponent},
  {path:"result",component:ResultsComponent, canActivate: [AuthGuard],
   children:[
     {
       path:"contact",
       component:ChildTestComponent
     }
   ]
},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  { path: "**", component:PageNotFoundComponent}
];

@NgModule({
  //to restore scroll to top when component changes
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent,AboutComponent,AdminComponent,PageNotFoundComponent,ResultsComponent,ChildTestComponent]