import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoanService {
  private apiUrl = `${environment.apiUrl}/loans`;

  constructor(private http: HttpClient) { }

  getLoans(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getLoanById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  createLoan(loan: any): Observable<any> {
    return this.http.post(this.apiUrl, loan);
  }

  updateLoan(id: string, loan: any): Observable<any> {
    return this.http.patch(`${this.apiUrl}/${id}`, loan);
  }

  deleteLoan(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
