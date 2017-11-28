import { TestBed, inject } from '@angular/core/testing';

import { PicServiceService } from './pic-service.service';

describe('PicServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PicServiceService]
    });
  });

  it('should be created', inject([PicServiceService], (service: PicServiceService) => {
    expect(service).toBeTruthy();
  }));
});
