import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.scss']
})
export class AddMemberComponent implements OnInit {

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
