import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeForecastComponent } from './three-forecast.component';

describe('ThreeForecastComponent', () => {
  let component: ThreeForecastComponent;
  let fixture: ComponentFixture<ThreeForecastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreeForecastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
