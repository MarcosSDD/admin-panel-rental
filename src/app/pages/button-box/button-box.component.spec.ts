import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonBoxComponent } from './button-box.component';

describe('ButtonBoxComponent', () => {
  let component: ButtonBoxComponent;
  let fixture: ComponentFixture<ButtonBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonBoxComponent]
    });
    fixture = TestBed.createComponent(ButtonBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
