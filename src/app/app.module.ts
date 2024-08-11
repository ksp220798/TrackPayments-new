import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { ApiService } from './services/api.service'; // Ensure ApiService is imported
import { AppRoutingModule } from './app-routing.module';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { ReactiveFormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { AppComponent } from './app.component';
import { MatListModule } from '@angular/material/list';
import { LoanComponent } from './components/loan/loan.component';
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignupComponent } from './components/signup/signup.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoanCardComponent } from './components/loan-card/loan-card.component';
import { LoanDetailsComponent } from './components/loan-details/loan-details.component';
import { MatTableModule } from '@angular/material/table';
import { ViewUserDetailsComponent } from './components/view-user-details/view-user-details.component';
import { InstallmentCardComponent } from './components/installment-card/installment-card.component';
import { BottomSheetComponent } from './components/bottom-sheet/bottom-sheet.component';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { AddLoanComponent } from './components/add-loan/add-loan.component';
import { AddInstallmentComponent } from './components/add-installment/add-installment.component';
import { AddMemberComponent } from './components/add-member/add-member.component';
@NgModule({
  declarations: [
    AppComponent,
    LoanComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    LoanCardComponent,
    LoanDetailsComponent,
    ViewUserDetailsComponent,
    InstallmentCardComponent,
    BottomSheetComponent,
    AddLoanComponent,
    AddInstallmentComponent,
    AddMemberComponent,
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
    MatListModule,
    CdkAccordionModule,
    MatExpansionModule,
    MatTableModule,
    MatBottomSheetModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
