import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CloneUserComponent } from './clone-user.component';

describe('CloneUserComponent', () => {
  let component: CloneUserComponent;
  let fixture: ComponentFixture<CloneUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CloneUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloneUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
