import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanySetComponent } from './company-set.component';

describe('CompanySetComponent', () => {
  let component: CompanySetComponent;
  let fixture: ComponentFixture<CompanySetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompanySetComponent]
    });
    fixture = TestBed.createComponent(CompanySetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
