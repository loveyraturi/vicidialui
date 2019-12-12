import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CloneCampaingComponent } from './clone-campaing.component';

describe('CloneUserComponent', () => {
  let component: CloneCampaingComponent;
  let fixture: ComponentFixture<CloneCampaingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CloneCampaingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloneCampaingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
