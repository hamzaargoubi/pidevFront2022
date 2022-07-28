import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceivedTransactionsComponent } from './received-transactions.component';

describe('ReceivedTransactionsComponent', () => {
  let component: ReceivedTransactionsComponent;
  let fixture: ComponentFixture<ReceivedTransactionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceivedTransactionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceivedTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
