import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { OverwatcherAppComponent } from '../app/overwatcher.component';

beforeEachProviders(() => [OverwatcherAppComponent]);

describe('App: Overwatcher', () => {
  it('should create the app',
      inject([OverwatcherAppComponent], (app: OverwatcherAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'overwatcher works!\'',
      inject([OverwatcherAppComponent], (app: OverwatcherAppComponent) => {
    expect(app.title).toEqual('overwatcher works!');
  }));
});
