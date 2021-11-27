import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandadoSatelitalDetailsComponent } from './details.component';

describe('DetailsComponent', () => {
  let component: CandadoSatelitalDetailsComponent;
  let fixture: ComponentFixture<CandadoSatelitalDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandadoSatelitalDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CandadoSatelitalDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
