import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { TconfDemoAppComponent } from '../app/tconf-demo.component';

beforeEachProviders(() => [TconfDemoAppComponent]);

describe('App: TconfDemo', () => {
  it('should create the app',
      inject([TconfDemoAppComponent], (app: TconfDemoAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'tconf-demo works!\'',
      inject([TconfDemoAppComponent], (app: TconfDemoAppComponent) => {
    expect(app.title).toEqual('tconf-demo works!');
  }));
});
