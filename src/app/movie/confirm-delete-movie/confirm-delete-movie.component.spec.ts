import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmDeleteMovieComponent } from './confirm-delete-movie.component';

describe('ConfirmDeleteMovieComponent', () => {
  let component: ConfirmDeleteMovieComponent;
  let fixture: ComponentFixture<ConfirmDeleteMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmDeleteMovieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmDeleteMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
