import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientSetComponent } from './client-set.component';

describe('ClientSetComponent', () => {
  let component: ClientSetComponent;
  let fixture: ComponentFixture<ClientSetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientSetComponent]
    });
    fixture = TestBed.createComponent(ClientSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
