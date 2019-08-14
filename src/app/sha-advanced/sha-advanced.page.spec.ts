import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShaAdvancedPage } from './sha-advanced.page';

describe('ShaAdvancedPage', () => {
  let component: ShaAdvancedPage;
  let fixture: ComponentFixture<ShaAdvancedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShaAdvancedPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShaAdvancedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
