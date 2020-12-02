import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopRatedPageComponent } from './top-rated-page.component';

describe('TopRatedPageComponent', () => {
  let component: TopRatedPageComponent;
  let fixture: ComponentFixture<TopRatedPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopRatedPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopRatedPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
