import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-anx7p2',
  templateUrl: './anx7p2.component.html',
  styleUrls: ['./anx7p2.component.scss']
})
export class Anx7p2Component   implements OnInit {
  anxdebForm1: FormGroup;
  isEditMode: boolean = false;

  constructor(private fb: FormBuilder, private snackBar: MatSnackBar) {}

  ngOnInit() {
    this.anxdebForm1 = this.fb.group({
      A700: ['L7', [Validators.required, Validators.pattern('^L6$')]],
      A001: ['',  [Validators.required, Validators.pattern('^[0-9]{7}$')]],
      A002: ['',  [Validators.required, Validators.pattern('^[a-zA-Z0-9]{1}$')]],
      A003: ['',  [Validators.required, Validators.pattern('^[a-df-zA-DF-Z0-9]{1}$')]],
      A004: ['000', [Validators.required, Validators.pattern('^000$')]],
      A705: ['', Validators.pattern('^[a-zA-Z0-9]{4}$')],
      A706: ['', Validators.pattern('^[0-9]{6}$')],
      A707: ['', [Validators.required, Validators.pattern('^[1234]$')]],
      A708: ['', Validators.pattern('^[a-zA-Z0-9]{13}$')],
      A709: ['', Validators.pattern('^[a-zA-Z0-9 ]{40}$')],
      A710: ['', Validators.pattern('^[a-zA-Z0-9 ]{40}$')],
      A711: ['', Validators.pattern('^[a-zA-Z0-9 ]{120}$')],
      A712: ['', Validators.pattern( '^[0-9]{2}$')],
      A713: ['', Validators.pattern('^[0-9]{15}$')],
      A714: ['', Validators.pattern('^[0-9]{15}$')],
      A715: ['', Validators.pattern('^[0-9]{15}$')],
      A716: ['', Validators.pattern('^[a-zA-Z0-9]{114}$')],
      
      
  
    });

    this.toggleFormControls(false);
  }

  toggleFormControls(enable: boolean) {
    if (enable) {
      this.anxdebForm1.enable();
      this.anxdebForm1.controls['A700'].disable();
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