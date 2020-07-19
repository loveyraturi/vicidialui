import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowRecordingComponent } from './show-recording.component';

describe('ShowRecordingComponent', () => {
  let component: ShowRecordingComponent;
  let fixture: ComponentFixture<ShowRecordingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowRecordingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowRecordingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
