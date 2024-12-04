import { TestBed } from '@angular/core/testing';

import { SimpleObservableService } from './simple-observable.service';

describe('SimpleObservableService', () => {
  let service: SimpleObservableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SimpleObservableService);
  });



  it('should return list when i call observeWithOf', () => {
    // given
    // when
    const result = service.observeWithOf();
    // then    
    expect(result).toHaveSize(3);
  });

  fit('should return list when i call observeWith', () => {
    // given
    // when
    const result = service.observeWithCstrctr();
    // then    
    expect(result).toHaveSize(3);
  });

});
