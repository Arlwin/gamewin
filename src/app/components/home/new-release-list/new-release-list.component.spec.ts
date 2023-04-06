import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewReleaseListComponent } from './new-release-list.component';

describe('NewReleaseListComponent', () => {
  let component: NewReleaseListComponent;
  let fixture: ComponentFixture<NewReleaseListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewReleaseListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewReleaseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
