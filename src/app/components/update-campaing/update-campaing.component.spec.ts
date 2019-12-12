import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCampaingComponent } from './update-campaing.component';

describe('UpdateUserComponent', () => {
  let component: UpdateCampaingComponent;
  let fixture: ComponentFixture<UpdateCampaingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateCampaingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCampaingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
