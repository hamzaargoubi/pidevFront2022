import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendVerificationCodeComponent } from './send-verification-code.component';

describe('SendVerificationCodeComponent', () => {
  let component: SendVerificationCodeComponent;
  let fixture: ComponentFixture<SendVerificationCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendVerificationCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendVerificationCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
