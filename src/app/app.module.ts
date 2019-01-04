import { NgtUniversalModule } from '@ng-toolkit/universal';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule,HTTP_INTERCEPTORS  } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormComponent } from './form/form.component';
import { CompareValidatorDirective } from './shared/compare-validator.directive';
import { AdminComponent } from './admin/admin.component';
import { GridModule } from '@progress/kendo-angular-grid';
import { ResultsComponent } from './results/results.component';
import { OrderModule } from 'ngx-order-pipe';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { fakeBackendProvider } from '../app/helpers/fake-backend';
import { ErrorInterceptor } from '../app/helpers/error.interceptor';
import { JwtInterceptor, } from '../app/helpers/jwt.interceptor';
import { AuthGuard } from '../app/guards/auth.guard';
import { AuthenticationService} from './services/authentication.service';
import { AlertService } from './services/alert.service';
import {UsersService } from './users.service';
import { AlertComponent } from './alert/alert.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    PageNotFoundComponent,
    FormComponent,
    CompareValidatorDirective,
    AdminComponent,
    ResultsComponent,
    LoginComponent,
    RegisterComponent,
    AlertComponent,

  ],
  imports: [
    CommonModule,
    NgtUniversalModule,
    HttpClientModule,
    GridModule,
    OrderModule,
    AppRoutingModule,
    NgxSpinnerModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [
    AuthenticationService,
    AlertService,
    UsersService,
    AuthGuard,
    fakeBackendProvider,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
})
export class AppModule { }
