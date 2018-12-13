/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HoroscopeService } from './horoscope.service';

describe('Service: Horoscope', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HoroscopeService]
    });
  });

  it('should ...', inject([HoroscopeService], (service: HoroscopeService) => {
    expect(service).toBeTruthy();
  }));
});
