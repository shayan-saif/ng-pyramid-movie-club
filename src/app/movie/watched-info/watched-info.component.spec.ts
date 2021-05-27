import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchedInfoComponent } from './watched-info.component';

describe('WatchedInfoComponent', () => {
  let component: WatchedInfoComponent;
  let fixture: ComponentFixture<WatchedInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WatchedInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchedInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
