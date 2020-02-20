import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditcompComponent } from './editcomp.component';

describe('EditcompComponent', () => {
  let component: EditcompComponent;
  let fixture: ComponentFixture<EditcompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditcompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
