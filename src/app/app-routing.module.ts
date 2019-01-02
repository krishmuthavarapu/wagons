import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AdminComponent } from './admin/admin.component';
import { ResultsComponent } from './results/results.component';

const routes: Routes = [
  {path:'',redirectTo:"/home",pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:"admin",component:AdminComponent},
  {path:"result",component:ResultsComponent},
  { path: "**", component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent,AboutComponent,AdminComponent,PageNotFoundComponent,ResultsComponent]