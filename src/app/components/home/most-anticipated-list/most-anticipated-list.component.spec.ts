import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostAnticipatedListComponent } from './most-anticipated-list.component';

describe('MostAnticipatedListComponent', () => {
  let component: MostAnticipatedListComponent;
  let fixture: ComponentFixture<MostAnticipatedListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostAnticipatedListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostAnticipatedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
