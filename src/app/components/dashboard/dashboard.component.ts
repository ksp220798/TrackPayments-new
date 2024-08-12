import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { AddLoanComponent } from '../add-loan/add-loan.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  times = [1, 2, 3, 4];
  constructor(private bottomSheet: MatBottomSheet,
    private router : Router
  ) { }

  ngOnInit(): void {
  }

  addLoan() {
    const dataToSend = { someData: 'example' };
    this.bottomSheet.open(AddLoanComponent, {
      data: dataToSend
    });
  }

  loanDetails(){
    this.router.navigate(['/loan-details']);
  }

}
