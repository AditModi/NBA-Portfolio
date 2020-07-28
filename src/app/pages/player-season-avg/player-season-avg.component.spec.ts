import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerSeasonAvgComponent } from './player-season-avg.component';

describe('PlayerSeasonAvgComponent', () => {
  let component: PlayerSeasonAvgComponent;
  let fixture: ComponentFixture<PlayerSeasonAvgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerSeasonAvgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerSeasonAvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
