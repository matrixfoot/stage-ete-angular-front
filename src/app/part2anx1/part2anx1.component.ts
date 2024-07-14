import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-part2anx1',
  templateUrl: './part2anx1.component.html',
  styleUrls: ['./part2anx1.component.scss']
})
export class Part2anx1Component implements OnInit {
  anxdebForm1: FormGroup;
  isEditMode: boolean = false;

  constructor(private fb: FormBuilder, private snackBar: MatSnackBar) {}

  ngOnInit() {
    this.anxdebForm1 = this.fb.group({
      A100: ['L1', [Validators.required, Validators.pattern('^L1$')]],
      A001: ['',  [Validators.required, Validators.pattern('^[0-9]{7}$')]],
      A002: ['',  [Validators.required, Validators.pattern('^[a-zA-Z0-9]{1}$')]],
      A003: ['',  [Validators.required, Validators.pattern('^[a-df-zA-DF-Z0-9]{1}$')]],
      A004: ['000', [Validators.required, Validators.pattern('^000$')]],
      A105: ['', Validators.pattern('^[a-zA-Z0-9]{4}$')],
      A106: ['', Validators.pattern('^[0-9]{6}$')],
      A107: ['', [Validators.required, Validators.pattern('^[23]$')]],
      A108: ['', Validators.pattern('^[a-zA-Z0-9]{13}$')],
      A109: ['', Validators.pattern('^[a-zA-Z0-9 ]{40}$')],
      A110: ['', Validators.pattern('^[a-zA-Z0-9 ]{40}$')],
      A111: ['', Validators.pattern('^[a-zA-Z0-9 ]{120}$')],
      A112: ['', Validators.pattern('^[1234]$')],
      A113: ['', Validators.pattern('^[0-9]{2}$')],
      A114: ['', Validators.pattern('^[0-9]{8}$')],
      A115: ['', Validators.pattern('^[0-9]{8}$')],
      A116: ['', Validators.pattern('^[0-9]{3}$')],
      A117: ['', Validators.pattern('^[0-9]{15}$')],
      A118: ['', Validators.pattern('^[0-9]{15}$')],
      A119: ['', Validators.pattern('^[0-9]{15}$')],
      A120: ['', Validators.pattern('^[0-9]{15}$')],
      A121: ['', Validators.pattern('^[0-9]{15}$')],
      A122: ['', Validators.pattern('^[0-9]{15}$')],
      A123: ['', Validators.pattern('^[0-9]{15}$')],
      A124: ['', Validators.pattern('^[0-9]{15}$')],
      A125: ['',   Validators.pattern('^[a-zA-Z0-9 ]{19}$')],
    });

    this.toggleFormControls(false);
  }

  toggleFormControls(enable: boolean) {
    if (enable) {
      this.anxdebForm1.enable();
      this.anxdebForm1.controls['A100'].disable();
      this.anxdebForm1.controls['A004'].disable();
    } else {
      this.anxdebForm1.disable();
    }
  }

  onToggleEdit() {
    this.isEditMode = !this.isEditMode;
    this.toggleFormControls(this.isEditMode);
  }

  onSubmit1() {
    if (this.isEditMode) {
      if (this.anxdebForm1.valid) {
        this.snackBar.open('Form submitted successfully!', 'Close', { duration: 3000 });
        console.log(this.anxdebForm1.value);
        this.isEditMode = false;
        this.toggleFormControls(false);
      } else {
        this.snackBar.open('Please correct the errors in the form.', 'Close', { duration: 3000 });
        this.markFormGroupTouched(this.anxdebForm1);

        // Log errors
        Object.keys(this.anxdebForm1.controls).forEach(key => {
          const controlErrors = this.anxdebForm1.get(key).errors;
          if (controlErrors != null) {
            Object.keys(controlErrors).forEach(keyError => {
              console.log('Key control: ' + key + ', keyError: ' + keyError + ', err value: ', controlErrors[keyError]);
            });
          }
        });
      }
    } else {
      this.onToggleEdit();
    }
  }

  markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();

      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }
}