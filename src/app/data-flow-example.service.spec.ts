import { TestBed } from '@angular/core/testing';

import { DataFlowExampleService } from './data-flow-example.service';

describe('DataFlowExampleService', () => {
  let service: DataFlowExampleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataFlowExampleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
