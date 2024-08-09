import { Component, OnInit } from '@angular/core';
import { LoanService } from '../../services/loan.service';

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.scss']
})
export class LoanComponent implements OnInit {
  loans: any[] = [];

  constructor(private loanService: LoanService) { }

  ngOnInit(): void {
    this.loadLoans();
  }

  loadLoans(): void {
    this.loanService.getLoans().subscribe(
      (data: any) => this.loans = data,
      (error: any) => console.error(error)
    );
  }
}
