import { NgtUniversalModule } from '@ng-toolkit/universal';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { FormsModule } from '@angular/forms';
import { from } from 'rxjs';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormComponent } from './form/form.component';
import { CompareValidatorDirective } from './shared/compare-validator.directive';
import { AdminComponent } from './admin/admin.component';
import { GridModule } from '@progress/kendo-angular-grid';
import { ResultsComponent } from './results/results.component';
import { OrderModule } from 'ngx-order-pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    PageNotFoundComponent,
    FormComponent,
    CompareValidatorDirective,
    AdminComponent,
    ResultsComponent
  ],
  imports: [
    CommonModule,
    NgtUniversalModule,
    HttpClientModule,
    GridModule,
    OrderModule,
    AppRoutingModule,
    NgxSpinnerModule,
    FormsModule
  ],
  providers: [],
})
export class AppModule { }
