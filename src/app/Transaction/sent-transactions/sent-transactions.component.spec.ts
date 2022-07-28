import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SentTransactionsComponent } from './sent-transactions.component';

describe('SentTransactionsComponent', () => {
  let component: SentTransactionsComponent;
  let fixture: ComponentFixture<SentTransactionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SentTransactionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SentTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
