import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvanceReviewPage } from './advance-review.page';

describe('AdvanceReviewPage', () => {
  let component: AdvanceReviewPage;
  let fixture: ComponentFixture<AdvanceReviewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvanceReviewPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvanceReviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
