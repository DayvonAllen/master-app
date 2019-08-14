import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ABasicPage } from './a-basic.page';

describe('ABasicPage', () => {
  let component: ABasicPage;
  let fixture: ComponentFixture<ABasicPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ABasicPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ABasicPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
