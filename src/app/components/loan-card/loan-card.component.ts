import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loan-card',
  templateUrl: './loan-card.component.html',
  styleUrls: ['./loan-card.component.scss']
})
export class LoanCardComponent implements OnInit {

  items = [
    { label: 'Amount :', value: '100000' },
    { label: 'Totol Member : ', value: '12' },
    { label: 'Start Date :', value: '12/12/2000' },
    { label: 'End Date :', value: '12/12/2000' },
    { label: 'installment paid / total:', value: '1/12' },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
