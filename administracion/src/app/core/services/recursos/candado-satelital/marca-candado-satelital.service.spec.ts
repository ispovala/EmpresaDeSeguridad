import { TestBed } from '@angular/core/testing';

import { MarcaCandadoSatelitalService } from './marca-candado-satelital.service';

describe('MarcaCandadoSatelitalService', () => {
  let service: MarcaCandadoSatelitalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarcaCandadoSatelitalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
