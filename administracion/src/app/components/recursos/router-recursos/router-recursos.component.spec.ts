import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterRecursosComponent } from './router-recursos.component';

describe('RouterRecursosComponent', () => {
  let component: RouterRecursosComponent;
  let fixture: ComponentFixture<RouterRecursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouterRecursosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterRecursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
