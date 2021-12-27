import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArmasListComponent } from './list.component';

describe('ArmasListComponent', () => {
  let component: ArmasListComponent;
  let fixture: ComponentFixture<ArmasListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArmasListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArmasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
