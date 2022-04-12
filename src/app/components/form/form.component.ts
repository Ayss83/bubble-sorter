import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  MIN_ELEMENT = 15;
  MAX_ELEMENT = 250;

  populateFormGroup = this.formBuilder.group({
    elementNumber: [
      this.MIN_ELEMENT,
      {
        validators: [
          Validators.min(this.MIN_ELEMENT),
          Validators.max(this.MAX_ELEMENT),
          Validators.required,
        ],
      },
    ],
  });

  @Output() onPopulateRequest = new EventEmitter<number>();

  constructor(private readonly formBuilder: FormBuilder) {}

  ngOnInit(): void {}

  requestPopulate() {
    this.onPopulateRequest.emit(
      this.populateFormGroup.get('elementNumber')?.value
    );
  }

  setErrorMessage(): string {
    if(this.populateFormGroup.controls["elementNumber"].hasError("min") || this.populateFormGroup.controls["elementNumber"].hasError("max")) {
      return "Out of range input"
    }

    if(this.populateFormGroup.controls["elementNumber"].hasError("required")) {
      return "A value is required"
    }

    return "";
  }
}
