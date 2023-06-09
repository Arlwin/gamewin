import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostPopularListComponent } from './most-popular-list.component';

describe('MostPopularListComponent', () => {
  let component: MostPopularListComponent;
  let fixture: ComponentFixture<MostPopularListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostPopularListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostPopularListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
