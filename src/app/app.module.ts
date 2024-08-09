import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { ApiService } from './services/api.service'; // Ensure ApiService is imported
import { AppRoutingModule } from './app-routing.module';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MatListModule } from '@angular/material/list';
import { LoanComponent } from './components/loan/loan.component';
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignupComponent } from './components/signup/signup.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoanCardComponent } from './components/loan-card/loan-card.component';
@NgModule({
  declarations: [
    AppComponent,
    LoanComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    LoanCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
