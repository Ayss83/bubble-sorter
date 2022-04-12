import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { FormComponent } from './form.component';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [FormComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('requestPopulate', () => {
    it('should emit input value with onPopulateRequest emitter', () => {
      const spiedEmit = spyOn(component.onPopulateRequest, 'emit');
      component.populateFormGroup.setValue({ elementNumber: 241 });

      component.requestPopulate();

      expect(spiedEmit).toHaveBeenCalledTimes(1);
      expect(spiedEmit).toHaveBeenCalledWith(241);
    });
  });

  describe('setErrorMessage', () => {
    it('should return message when error is present', () => {
      component.populateFormGroup.setValue({
        elementNumber: component.MIN_ELEMENT - 1,
      });
      expect(component.setErrorMessage()).toBeTruthy();

      component.populateFormGroup.setValue({
        elementNumber: component.MAX_ELEMENT + 1,
      });
      expect(component.setErrorMessage()).toBeTruthy();

      component.populateFormGroup.setValue({ elementNumber: null });
      expect(component.setErrorMessage()).toBeTruthy();

      component.populateFormGroup.setValue({
        elementNumber: component.MIN_ELEMENT,
      });
      expect(component.setErrorMessage()).toBeFalsy();

      component.populateFormGroup.setValue({
        elementNumber: component.MAX_ELEMENT,
      });
      expect(component.setErrorMessage()).toBeFalsy();
    });
  });
});
