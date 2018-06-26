import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomeSnackBarComponent } from './custome-snack-bar.component';

describe('CustomeSnackBarComponent', () => {
  let component: CustomeSnackBarComponent;
  let fixture: ComponentFixture<CustomeSnackBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomeSnackBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomeSnackBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
