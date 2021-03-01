import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllUserComponent } from './view.component';

describe('ViewAllUserComponent', () => {
  let component: ViewAllUserComponent;
  let fixture: ComponentFixture<ViewAllUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ViewAllUserComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});