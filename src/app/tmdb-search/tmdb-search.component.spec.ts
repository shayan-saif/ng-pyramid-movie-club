import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TmdbSearchComponent } from './tmdb-search.component';

describe('TmdbSearchComponent', () => {
  let component: TmdbSearchComponent;
  let fixture: ComponentFixture<TmdbSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TmdbSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TmdbSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
