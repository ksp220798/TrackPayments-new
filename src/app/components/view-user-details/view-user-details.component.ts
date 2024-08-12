import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-user-details',
  templateUrl: './view-user-details.component.html',
  styleUrls: ['./view-user-details.component.scss']
})
export class ViewUserDetailsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
 back(){
    this.router.navigate(['/loan-details']);
 }
}
