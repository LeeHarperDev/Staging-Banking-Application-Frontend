import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {AccountService} from "../../services/account.service";
import Transaction from "../../classes/Transaction";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-account-transactions-page',
  templateUrl: './account-transactions-page.component.html',
  styleUrls: ['./account-transactions-page.component.css']
})
export class AccountTransactionsPageComponent implements OnInit {

  transactions!: Transaction[];

  constructor(
    private accountService : AccountService,
    private activatedRoute : ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.accountService.getAccountTransactions(params.get("id")).subscribe(transactions => this.transactions = transactions);
    });
  }
}
