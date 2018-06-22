import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondSidenavComponent } from './second-sidenav.component';

describe('SecondSidenavComponent', () => {
  let component: SecondSidenavComponent;
  let fixture: ComponentFixture<SecondSidenavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondSidenavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
