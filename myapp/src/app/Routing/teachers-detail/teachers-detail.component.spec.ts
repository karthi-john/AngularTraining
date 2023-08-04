import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachersDetailComponent } from './teachers-detail.component';

describe('TeachersDetailComponent', () => {
  let component: TeachersDetailComponent;
  let fixture: ComponentFixture<TeachersDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeachersDetailComponent]
    });
    fixture = TestBed.createComponent(TeachersDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
