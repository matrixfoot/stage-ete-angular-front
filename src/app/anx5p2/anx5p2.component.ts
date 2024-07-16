import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-anx5p2',
  templateUrl: './anx5p2.component.html',
  styleUrls: ['./anx5p2.component.scss']
})
export class Anx5p2Component   implements OnInit {
  anxdebForm1: FormGroup;
  isEditMode: boolean = false;

  constructor(private fb: FormBuilder, private snackBar: MatSnackBar) {}

  ngOnInit() {
    this.anxdebForm1 = this.fb.group({
      A500: ['L5', [Validators.required, Validators.pattern('^L5$')]],
      A001: ['',  [Validators.required, Validators.pattern('^[0-9]{7}$')]],
      A002: ['',  [Validators.required, Validators.pattern('^[a-zA-Z0-9]{1}$')]],
      A003: ['',  [Validators.required, Validators.pattern('^[a-df-zA-DF-Z0-9]{1}$')]],
      A004: ['000', [Validators.required, Validators.pattern('^000$')]],
      A505: ['', Validators.pattern('^[a-zA-Z0-9]{4}$')],
      A506: ['', Validators.pattern('^[0-9]{6}$')],
      A507: ['', [Validators.required, Validators.pattern('^[1234]$')]],
      A508: ['', Validators.pattern('^[a-zA-Z0-9]{13}$')],
      A509: ['', Validators.pattern('^[a-zA-Z0-9 ]{40}$')],
      A510: ['', Validators.pattern('^[a-zA-Z0-9 ]{40}$')],
      A511: ['', Validators.pattern('^[a-zA-Z0-9 ]{120}$')],
      A512: ['', Validators.pattern( '^[0-9]{15}$')],
      A513: ['', Validators.pattern('^[0-9]{15}$')],
      A514: ['', Validators.pattern('^[0-9]{15}$')],
      A515: ['', Validators.pattern('^[0-9]{15}$')],
      A516: ['', Validators.pattern('^[0-9]{15}$')],
      A517: ['', Validators.pattern('^[0-9]{5}$')],
      A518: ['', Validators.pattern('^[0-9]{15}$')],
      A519: ['', Validators.pattern('^[a-zA-Z0-9 ]{56}$')],
      
  
    });

    this.toggleFormControls(false);
  }

  toggleFormControls(enable: boolean) {
    if (enable) {
      this.anxdebForm1.enable();
      this.anxdebForm1.controls['A500'].disable();
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