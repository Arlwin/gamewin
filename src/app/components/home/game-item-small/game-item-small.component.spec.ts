import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameItemSmallComponent } from './game-item-small.component';

describe('GameItemSmallComponent', () => {
  let component: GameItemSmallComponent;
  let fixture: ComponentFixture<GameItemSmallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameItemSmallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameItemSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
