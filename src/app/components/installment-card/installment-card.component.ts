import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { BottomSheetComponent } from '../bottom-sheet/bottom-sheet.component';

@Component({
  selector: 'app-installment-card',
  templateUrl: './installment-card.component.html',
  styleUrls: ['./installment-card.component.scss']
})
export class InstallmentCardComponent implements OnInit {

  constructor(private bottomSheet: MatBottomSheet) { }

  items = [
    { label: 'Installment Amount:', value: '1000' },
    { label: 'Status :', value: 'Paid' },
    { label: 'Date :', value: '12/12/2000' },
    { label: 'Payment Mode :', value: 'Cash' },
    { label: 'installment paid / total:', value: '1/12' },
  ];

  ngOnInit(): void {
  }

  openBottomSheet(): void {
    const dataToSend = { someData: 'example' };
    this.bottomSheet.open(BottomSheetComponent, {
      data: dataToSend
    });
  }

}
