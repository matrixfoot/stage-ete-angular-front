import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-anx2p2',
  templateUrl: './anx2p2.component.html',
  styleUrls: ['./anx2p2.component.scss']
})
export class Anx2p2Component  implements OnInit {
  anxdebForm1: FormGroup;
  isEditMode: boolean = false;

  constructor(private fb: FormBuilder, private snackBar: MatSnackBar) {}

  ngOnInit() {
    this.anxdebForm1 = this.fb.group({
      A200: ['L2', [Validators.required, Validators.pattern('^L2$')]],
      A001: ['',  [Validators.required, Validators.pattern('^[0-9]{7}$')]],
      A002: ['',  [Validators.required, Validators.pattern('^[a-zA-Z0-9]{1}$')]],
      A003: ['',  [Validators.required, Validators.pattern('^[a-df-zA-DF-Z0-9]{1}$')]],
      A004: ['000', [Validators.required, Validators.pattern('^000$')]],
      A205: ['', Validators.pattern('^[a-zA-Z0-9]{4}$')],
      A206: ['', Validators.pattern('^[0-9]{6}$')],
      A207: ['', [Validators.required, Validators.pattern('^[12]$')]],
      A208: ['', Validators.pattern('^[a-zA-Z0-9]{13}$')],
      A209: ['', Validators.pattern('^[a-zA-Z0-9 ]{40}$')],
      A210: ['', Validators.pattern('^[a-zA-Z0-9 ]{40}$')],
      A211: ['', Validators.pattern('^[a-zA-Z0-9 ]{120}$')],
      A212: ['', Validators.pattern('^[1234560]$')],
      A213: ['', Validators.pattern('^[0-9]{15}$')],
      A214: ['', Validators.pattern('^[0-9]{15}$')],
      A215: ['', Validators.pattern('^[0-9]{15}$')],
      A216: ['', Validators.pattern('^[0-9]{15}$')],
      A217: ['', Validators.pattern('^[0-9]{15}$')],
      A218: ['', Validators.pattern('^[0-9]{15}$')],
      A219: ['', Validators.pattern('^[0-9]{15}$')],
      A220: ['', Validators.pattern('^[0-9]{15}$')],
      A221: ['', Validators.pattern('^[0-9]{15}$')],
      A222: ['', Validators.pattern('^[0-9]{15}$')],
      A223: ['', Validators.pattern('^[0-9]{10}$')],
      
    });

    this.toggleFormControls(false);
  }

  toggleFormControls(enable: boolean) {
    if (enable) {
      this.anxdebForm1.enable();
      this.anxdebForm1.controls['A200'].disable();
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