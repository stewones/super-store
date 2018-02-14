import { TestBed, inject } from '@angular/core/testing';

import { PessoasService } from './pessoas.service';

describe('PessoasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PessoasService]
    });
  });

  it('should be created', inject([PessoasService], (service: PessoasService) => {
    expect(service).toBeTruthy();
  }));
});
