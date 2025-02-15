import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutsideStatsComponent } from './outside-stats.component';

describe('OutsideStatsComponent', () => {
  let component: OutsideStatsComponent;
  let fixture: ComponentFixture<OutsideStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OutsideStatsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OutsideStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
