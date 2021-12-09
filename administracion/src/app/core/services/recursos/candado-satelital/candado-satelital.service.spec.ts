import { TestBed } from '@angular/core/testing';

import { CandadoSatelitalService } from './candado-satelital.service';

describe('CandadoSatelitalService', () => {
  let service: CandadoSatelitalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CandadoSatelitalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
