import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandadosSatelitalesListComponent } from './list.component';

describe('ListComponent', () => {
  let component: CandadosSatelitalesListComponent;
  let fixture: ComponentFixture<CandadosSatelitalesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandadosSatelitalesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CandadosSatelitalesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
