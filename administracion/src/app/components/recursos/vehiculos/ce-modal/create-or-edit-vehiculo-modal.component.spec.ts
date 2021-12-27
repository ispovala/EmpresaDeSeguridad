import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOrEditVehiculoModalComponent } from './create-or-edit-vehiculo-modal.component';

describe('CreateOrEditVehiculoModalComponent', () => {
  let component: CreateOrEditVehiculoModalComponent;
  let fixture: ComponentFixture<CreateOrEditVehiculoModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateOrEditVehiculoModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateOrEditVehiculoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
