import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllcomoditiesComponent } from './allcomodities.component';

describe('AllcomoditiesComponent', () => {
  let component: AllcomoditiesComponent;
  let fixture: ComponentFixture<AllcomoditiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllcomoditiesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllcomoditiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
