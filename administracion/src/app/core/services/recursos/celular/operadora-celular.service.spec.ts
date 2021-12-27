import { TestBed } from '@angular/core/testing';

import { OperadoraCelularService } from './operadora-celular.service';

describe('OperadoraCelularService', () => {
  let service: OperadoraCelularService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OperadoraCelularService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
