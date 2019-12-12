import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCampaingComponent } from './show-campaing.component';

describe('ShowUsersComponent', () => {
  let component: ShowCampaingComponent;
  let fixture: ComponentFixture<ShowCampaingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowCampaingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowCampaingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
