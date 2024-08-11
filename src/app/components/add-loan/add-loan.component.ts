import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-add-loan',
  templateUrl: './add-loan.component.html',
  styleUrls: ['./add-loan.component.scss']
})
export class AddLoanComponent implements OnInit {

  constructor(private bottomSheetRef: MatBottomSheet) { }

  ngOnInit(): void {
  }

  close(): void {
    this.bottomSheetRef.dismiss();
  }

  submit(): void {
    // Handle form submission here
    this.bottomSheetRef.dismiss();
  }

}
