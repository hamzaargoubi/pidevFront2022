import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrUpdateAssociationComponent } from './add-or-update-association.component';

describe('AddOrUpdateAssociationComponent', () => {
  let component: AddOrUpdateAssociationComponent;
  let fixture: ComponentFixture<AddOrUpdateAssociationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddOrUpdateAssociationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOrUpdateAssociationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
