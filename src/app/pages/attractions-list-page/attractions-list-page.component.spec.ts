import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttractionsListPageComponent } from './attractions-list-page.component';

describe('AttractionsListPageComponent', () => {
  let component: AttractionsListPageComponent;
  let fixture: ComponentFixture<AttractionsListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttractionsListPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttractionsListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
