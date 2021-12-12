import { TestBed } from '@angular/core/testing';

import { TipoCandadoSatelitalService } from './tipo-candado-satelital.service';

describe('TipoCandadoSatelitalService', () => {
  let service: TipoCandadoSatelitalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipoCandadoSatelitalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
