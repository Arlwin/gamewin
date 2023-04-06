import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopRatedListComponent } from './top-rated-list.component';

describe('TopRatedListComponent', () => {
  let component: TopRatedListComponent;
  let fixture: ComponentFixture<TopRatedListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopRatedListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopRatedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
