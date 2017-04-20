/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MyMainComponent } from './my-main.component';

describe('MyMainComponent', () => {
  let component: MyMainComponent;
  let fixture: ComponentFixture<MyMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
