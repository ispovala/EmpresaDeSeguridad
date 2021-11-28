import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiculoDetailsComponent } from './details.component';

describe('DetailsComponent', () => {
  let component: VehiculoDetailsComponent;
  let fixture: ComponentFixture<VehiculoDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehiculoDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiculoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
