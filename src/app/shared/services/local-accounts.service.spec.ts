import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { LocalAccountsService } from './local-accounts.service';

describe('LocalAccounts Service', () => {
  beforeEachProviders(() => [LocalAccountsService]);

  it('should ...',
      inject([LocalAccountsService], (service: LocalAccountsService) => {
    expect(service).toBeTruthy();
  }));
});
