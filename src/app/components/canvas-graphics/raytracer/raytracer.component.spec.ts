/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RaytracerComponent } from './raytracer.component';

describe('RaytracerComponent', () => {
  let component: RaytracerComponent;
  let fixture: ComponentFixture<RaytracerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaytracerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaytracerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
