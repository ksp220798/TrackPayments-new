import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-add-installment',
  templateUrl: './add-installment.component.html',
  styleUrls: ['./add-installment.component.scss']
})
export class AddInstallmentComponent implements OnInit {

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
