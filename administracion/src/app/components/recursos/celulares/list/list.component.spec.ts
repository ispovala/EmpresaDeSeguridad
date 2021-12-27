import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CelularesListComponent } from './list.component';

describe('CelularesListComponent', () => {
  let component: CelularesListComponent;
  let fixture: ComponentFixture<CelularesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CelularesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CelularesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
