import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowBreakTyoesComponent } from './show-breakTypes.component';

describe('ShowUsersComponent', () => {
  let component: ShowBreakTyoesComponent;
  let fixture: ComponentFixture<ShowBreakTyoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowBreakTyoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowBreakTyoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
