import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveMovieComponent } from './archive-movie.component';

describe('ArchiveMovieComponent', () => {
  let component: ArchiveMovieComponent;
  let fixture: ComponentFixture<ArchiveMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArchiveMovieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchiveMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
