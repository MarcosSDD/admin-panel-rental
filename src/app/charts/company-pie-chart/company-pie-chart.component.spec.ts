import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyPieChartComponent } from './company-pie-chart.component';

describe('CompanyPieChartComponent', () => {
  let component: CompanyPieChartComponent;
  let fixture: ComponentFixture<CompanyPieChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompanyPieChartComponent]
    });
    fixture = TestBed.createComponent(CompanyPieChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
