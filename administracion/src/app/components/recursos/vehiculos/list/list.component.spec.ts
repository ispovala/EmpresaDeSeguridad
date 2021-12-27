import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiculosListComponent } from './list.component';

describe('VehiculosListComponent', () => {
  let component: VehiculosListComponent;
  let fixture: ComponentFixture<VehiculosListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VehiculosListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiculosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
