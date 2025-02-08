import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionmarketComponent } from './collectionmarket.component';

describe('CollectionmarketComponent', () => {
  let component: CollectionmarketComponent;
  let fixture: ComponentFixture<CollectionmarketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollectionmarketComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CollectionmarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
