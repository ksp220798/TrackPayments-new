import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-add-loan',
  templateUrl: './add-loan.component.html',
  styleUrls: ['./add-loan.component.scss']
})
export class AddLoanComponent implements OnInit {

  loanData = {
    title: '',
    loanAmount: 0,
    rateOfInterest: 0,
    principal: 0,
    tenureInMonths: 0,
    startDate: '',
    totalMembers: 0,
  };

  constructor(private bottomSheetRef: MatBottomSheet,
    private http: HttpClient,
  ) { }

  ngOnInit(): void {
  }

  close(): void {
    this.bottomSheetRef.dismiss();
  }

  submit(): void {
    // Prepare the loan data to match the schema
    const loanPayload = {
      loanTitle : this.loanData.title,
      loanAmount: this.loanData.loanAmount,
      rateOfInterest: this.loanData.rateOfInterest,
      principal: this.loanData.principal,
      totalInterest: this.calculateTotalInterest(),
      amountPaidTillNow: 0, // Default value on creation
      amountToBePaid: this.loanData.loanAmount, // Initially the full amount
      tenureInMonths: this.loanData.tenureInMonths,
      loanOpenDate: this.loanData.startDate,
      totalInstallments : this.loanData.tenureInMonths,
      loanCloseDate: this.calculateEndDate(),
      totalMembers: this.loanData.totalMembers,
      installmentsPaid: 0, // Default value on creation
      createdBy: localStorage.getItem('user_ID'), // Replace with actual user ID from auth
    };
     console.log("formadata",loanPayload);
    // API call to create loan
    this.http.post('http://localhost:3000/api/loans', loanPayload).subscribe(
      response => {
        console.log('Loan created successfully', response);
        this.close();
      },
      error => {
        console.error('Error creating loan', error);
      }
    );
  }

  private calculateTotalInterest(): number {
    // Implement interest calculation logic here
    return (this.loanData.loanAmount * this.loanData.rateOfInterest) / 100;
  }

  private calculateEndDate(): string {
    const startDate = new Date(this.loanData.startDate);
    startDate.setMonth(startDate.getMonth() + this.loanData.tenureInMonths);
    return startDate.toISOString().split('T')[0]; // Return date in YYYY-MM-DD format
  }
}

