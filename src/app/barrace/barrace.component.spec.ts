import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraceComponent } from './barrace.component';

describe('BarraceComponent', () => {
  let component: BarraceComponent;
  let fixture: ComponentFixture<BarraceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarraceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BarraceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
