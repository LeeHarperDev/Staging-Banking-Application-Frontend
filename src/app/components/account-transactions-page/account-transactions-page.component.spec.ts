import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountTransactionsPageComponent } from './account-transactions-page.component';

describe('AccountTransactionsPageComponent', () => {
  let component: AccountTransactionsPageComponent;
  let fixture: ComponentFixture<AccountTransactionsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountTransactionsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountTransactionsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
