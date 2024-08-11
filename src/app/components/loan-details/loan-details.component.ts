import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { AddLoanComponent } from '../add-loan/add-loan.component';
import { AddInstallmentComponent } from '../add-installment/add-installment.component';
import { AddMemberComponent } from '../add-member/add-member.component';
@Component({
  selector: 'app-loan-details',
  templateUrl: './loan-details.component.html',
  styleUrls: ['./loan-details.component.scss']
})

export class LoanDetailsComponent implements OnInit {
  panelOpenState = false;
  displayedColumns: string[] = ['InstallmentNo', 'Status', 'Date', 'Mode'];
  dataSource = [
    { InstallmentNo: 1, Status: 'Paid', Date: '12 jan 24', Mode: 'Online Gpay' },
    { InstallmentNo: 2, Status: 'Paid', Date: '12 jul 24 ', Mode: 'Cash' },
  ];

  panelOpenState2 = false;
  displayedColumns2: string[] = ['UserNo', 'Name', 'Status', 'Date', 'Mode'];
  dataSource2 = [
    { UserNo: 1, Name: 'Rehan', Status: 'Paid', Date: '12 jan 24', Mode: 'Online Gpay' },
    { UserNo: 2, Name: 'Kundan', Status: 'Paid', Date: '12 jan 24', Mode: 'Online Gpay' },
  ];
  constructor(private bottomSheet: MatBottomSheet) { }
  items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];

  items1 = [
    { label: 'Amount :', value: '100000' },
    { label: 'Rate of interest: ', value: '8.5pa' },
    { label: 'Principal: ', value: '70000' },
    { label: 'total interest: ', value: '30000' },
    { label: 'Amount Paid till now : ', value: '10000' },
    { label: 'Amount yet to Pay : ', value: '90000' },
    { label: 'Tenure: ', value: '60 Months' },
    { label: 'Start Date :', value: '12/12/2000' },
    { label: 'End Date :', value: '12/12/2005' },
    { label: 'Total Memebr : ', value: '12' },
    { label: 'installment paid / total:', value: '1/12' },
  ];
  expandedIndex = 0;
  ngOnInit(): void {
  }

  addInstallment() {
    const dataToSend = { someData: 'example' };
    this.bottomSheet.open(AddInstallmentComponent, {
      data: dataToSend
    });
  }

  addMember() {
    const dataToSend = { someData: 'example' };
    this.bottomSheet.open(AddMemberComponent, {
      data: dataToSend
    });
  }

}
