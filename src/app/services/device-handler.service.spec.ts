import { TestBed } from '@angular/core/testing';

import { DeviceHandlerService } from './device-handler.service';

describe('DeviceHandlerService', () => {
  let service: DeviceHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeviceHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
