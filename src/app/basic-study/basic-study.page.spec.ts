import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicStudyPage } from './basic-study.page';

describe('BasicStudyPage', () => {
  let component: BasicStudyPage;
  let fixture: ComponentFixture<BasicStudyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicStudyPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicStudyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
