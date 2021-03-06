/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import {GitService} from '../../services/gitService'
import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('Component: Home', () => {
  it('should create an instance',inject([GitService], (testService: GitService) => {
    let component = new HomeComponent(testService);
    expect(component).toBeTruthy();
  }));
});
