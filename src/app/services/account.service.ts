import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import Account from "../classes/Account";
import {Observable} from "rxjs";
import Transaction from "../classes/Transaction";
import {tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(
    private http : HttpClient
  ) { }

  getAccountTransactions(id: string | null) : Observable<Transaction[]> {
    return this.http.get<Transaction[]>(`http://localhost:8081/api/accounts/${id}/transactions`).pipe(
      tap(_ => {console.log(_)})
    );
  }
}
