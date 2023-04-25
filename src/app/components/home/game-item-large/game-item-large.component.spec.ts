import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameItemLargeComponent } from './game-item-large.component';

describe('GameItemLargeComponent', () => {
  let component: GameItemLargeComponent;
  let fixture: ComponentFixture<GameItemLargeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameItemLargeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameItemLargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
