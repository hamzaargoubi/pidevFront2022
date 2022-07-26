import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrascformComponent } from './trascform.component';

describe('TrascformComponent', () => {
  let component: TrascformComponent;
  let fixture: ComponentFixture<TrascformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrascformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrascformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
