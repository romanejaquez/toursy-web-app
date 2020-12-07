import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttractionsPageComponent } from './attractions-page.component';

describe('AttractionsPageComponent', () => {
  let component: AttractionsPageComponent;
  let fixture: ComponentFixture<AttractionsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttractionsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttractionsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
