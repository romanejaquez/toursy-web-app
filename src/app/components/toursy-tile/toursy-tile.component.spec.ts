import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToursyTileComponent } from './toursy-tile.component';

describe('ToursyTileComponent', () => {
  let component: ToursyTileComponent;
  let fixture: ComponentFixture<ToursyTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToursyTileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToursyTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
