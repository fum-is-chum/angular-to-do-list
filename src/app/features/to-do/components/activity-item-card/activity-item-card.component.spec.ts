import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityItemCardComponent } from './activity-item-card.component';

describe('ActivityItemCardComponent', () => {
  let component: ActivityItemCardComponent;
  let fixture: ComponentFixture<ActivityItemCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivityItemCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityItemCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
