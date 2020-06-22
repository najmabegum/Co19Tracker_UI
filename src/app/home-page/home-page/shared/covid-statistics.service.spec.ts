import { TestBed } from '@angular/core/testing';

import { CovidStatisticsService } from './covid-statistics.service';

describe('CovidStatisticsService', () => {
  let service: CovidStatisticsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CovidStatisticsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
