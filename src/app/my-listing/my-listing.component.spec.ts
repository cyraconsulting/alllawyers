/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MyListingComponent } from './my-listing.component';

describe('MyListingComponent', () => {
  let component: MyListingComponent;
  let fixture: ComponentFixture<MyListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
