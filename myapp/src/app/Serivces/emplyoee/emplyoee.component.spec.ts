import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmplyoeeComponent } from './emplyoee.component';

describe('EmplyoeeComponent', () => {
  let component: EmplyoeeComponent;
  let fixture: ComponentFixture<EmplyoeeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmplyoeeComponent]
    });
    fixture = TestBed.createComponent(EmplyoeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
