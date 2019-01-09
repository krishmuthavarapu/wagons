import { TestBed } from '@angular/core/testing';

import { LogphpService } from './logphp.service';

describe('LogphpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LogphpService = TestBed.get(LogphpService);
    expect(service).toBeTruthy();
  });
});
