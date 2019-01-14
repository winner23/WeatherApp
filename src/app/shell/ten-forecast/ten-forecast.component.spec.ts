import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TenForecastComponent } from './ten-forecast.component';

describe('TenForecastComponent', () => {
  let component: TenForecastComponent;
  let fixture: ComponentFixture<TenForecastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TenForecastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TenForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
