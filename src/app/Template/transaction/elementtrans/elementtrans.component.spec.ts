import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementtransComponent } from './elementtrans.component';

describe('ElementtransComponent', () => {
  let component: ElementtransComponent;
  let fixture: ComponentFixture<ElementtransComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElementtransComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementtransComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
