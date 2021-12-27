import { TestBed } from '@angular/core/testing';

import { CalibreArmaService } from './calibre-arma.service';

describe('CalibreArmaService', () => {
  let service: CalibreArmaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalibreArmaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
