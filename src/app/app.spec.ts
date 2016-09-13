import { TestBed } from '@angular/core/testing';

import { App } from './app';

describe('App', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ declarations: [ App ] });
  });

  it ('should work', () => {
    let component = TestBed.createComponent(App);

    expect(component.componentInstance instanceof App).toBe(true, 'should create App');
  });
});
