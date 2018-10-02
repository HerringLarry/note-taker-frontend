import { TestBed, inject } from '@angular/core/testing';

import { ImageRequestorService } from './image-requestor.service';

describe('ImageRequestorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ImageRequestorService]
    });
  });

  it('should be created', inject([ImageRequestorService], (service: ImageRequestorService) => {
    expect(service).toBeTruthy();
  }));
});
