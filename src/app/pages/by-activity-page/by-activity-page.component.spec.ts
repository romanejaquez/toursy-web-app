import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByActivityPageComponent } from './by-activity-page.component';

describe('ByActivityPageComponent', () => {
  let component: ByActivityPageComponent;
  let fixture: ComponentFixture<ByActivityPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ByActivityPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ByActivityPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
