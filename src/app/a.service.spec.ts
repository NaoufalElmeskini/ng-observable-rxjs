import { TestBed } from '@angular/core/testing';

import { AService } from './a.service';

describe('AService', () => {
  let service: AService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AService);
  });

  fit('should do something', () => {
    console.log('hello from test!');
    service.doSmth();
    
    expect(true).toBeTrue();
  });
});
