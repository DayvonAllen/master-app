import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KyaAdvancedPage } from './kya-advanced.page';

describe('KyaAdvancedPage', () => {
  let component: KyaAdvancedPage;
  let fixture: ComponentFixture<KyaAdvancedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KyaAdvancedPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KyaAdvancedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
