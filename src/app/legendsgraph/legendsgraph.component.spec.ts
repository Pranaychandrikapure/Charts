import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegendsgraphComponent } from './legendsgraph.component';

describe('LegendsgraphComponent', () => {
  let component: LegendsgraphComponent;
  let fixture: ComponentFixture<LegendsgraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LegendsgraphComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LegendsgraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
