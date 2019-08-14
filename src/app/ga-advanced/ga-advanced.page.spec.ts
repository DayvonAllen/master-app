import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GaAdvancedPage } from './ga-advanced.page';

describe('GaAdvancedPage', () => {
  let component: GaAdvancedPage;
  let fixture: ComponentFixture<GaAdvancedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GaAdvancedPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GaAdvancedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
