import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizantalbarComponent } from './horizantalbar.component';

describe('HorizantalbarComponent', () => {
  let component: HorizantalbarComponent;
  let fixture: ComponentFixture<HorizantalbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HorizantalbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HorizantalbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
