import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilecompComponent } from './profilecomp.component';

describe('ProfilecompComponent', () => {
  let component: ProfilecompComponent;
  let fixture: ComponentFixture<ProfilecompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilecompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilecompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
