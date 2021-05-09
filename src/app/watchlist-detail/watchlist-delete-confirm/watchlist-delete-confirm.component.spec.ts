import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchlistDeleteConfirmComponent } from './watchlist-delete-confirm.component';

describe('WatchlistDeleteConfirmComponent', () => {
  let component: WatchlistDeleteConfirmComponent;
  let fixture: ComponentFixture<WatchlistDeleteConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WatchlistDeleteConfirmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchlistDeleteConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
