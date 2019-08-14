import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaAdvancedPage } from './ba-advanced.page';

describe('BaAdvancedPage', () => {
  let component: BaAdvancedPage;
  let fixture: ComponentFixture<BaAdvancedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaAdvancedPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaAdvancedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
