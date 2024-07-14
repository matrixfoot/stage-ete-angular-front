import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-anx4p3',
  templateUrl: './anx4p3.component.html',
  styleUrls: ['./anx4p3.component.scss']
})
export class Anx4p3Component implements OnInit {
  anxdebForm: FormGroup;
  isEditMode: boolean = false;

  constructor(private fb: FormBuilder, private snackBar: MatSnackBar) {}

  ngOnInit() {
    this.anxdebForm = this.fb.group({
      T400: [{ value: 'T4', disabled: true }, [Validators.required, this.validateE100]],
      T001: ['', [Validators.required, Validators.pattern('^[0-9]{7}$')]],
      T002: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9]{1}$')]],
      T003: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9]{1}$'), this.validateE003]],
      T004: [{ value: '000', disabled: true }, [Validators.required, this.validateE004]],
      T405: ['', Validators.pattern('^[a-zA-Z0-9]{4}$')],
      T406: ['', Validators.pattern('^[a-zA-Z0-9]{221}$')],
      T407: ['00000', [Validators.required, Validators.pattern('^[0]{5}$'), this.validateT7]],
      T408: ['', Validators.pattern('^[0-9]{15}$')],
      T409: ['', Validators.pattern('^[0-9]{5}$')],
      T410: ['', Validators.pattern('^[0-9]{15}$')],
      T411: ['00000', [Validators.pattern('^[0]{5}$'), this.validateT11]],
      T412: ['', Validators.pattern('^[0-9]{15}$')],
      T413: ['00000', [Validators.pattern('^[0]{5}$'), this.validateT13]],
      T414: ['', Validators.pattern('^[0-9]{15}$')],
      T415: ['00000', [Validators.pattern('^[0]{5}$'), this.validateT15]],
      T416: ['', Validators.pattern('^[0-9]{15}$')],
      T417: ['', Validators.pattern('^[0-9]{15}$')],
      T418: ['',Validators.pattern('^[0-9]{}$')],
      T419: ['', Validators.pattern('^[0-9]{15}$')],
      T420: ['', Validators.pattern('^[0-9]{15}$')]
    });

    this.toggleFormControls(false);
  }

  validateE100(control: FormControl) {
    return control.value === 'T4' ? null : { invalidValue: true };
  }

  validateE003(control: FormControl) {
    return control.value !== 'E' ? null : { invalidValue: true };
  }

  validateT7(control: FormControl) {
    return control.value !== '00000' ? null : { invalidValue: true };
  }

  validateT11(control: FormControl) {
    return control.value !== '00000' ? null : { invalidValue: true };
  }

  validateT13(control: FormControl) {
    return control.value !== '00000' ? null : { invalidValue: true };
  }

  validateT15(control: FormControl) {
    return control.value !== '00000' ? null : { invalidValue: true };
  }

  validateE004(control: FormControl) {
    return control.value === '000' ? null : { invalidValue: true };
  }

  toggleFormControls(enable: boolean) {
    if (enable) {
      this.anxdebForm.enable();
      this.anxdebForm.controls['T400'].disable();
      this.anxdebForm.controls['T004'].disable();
    } else {
      this.anxdebForm.disable();
    }
  }

  onToggleEdit() {
    this.isEditMode = !this.isEditMode;
    this.toggleFormControls(this.isEditMode);
  }

  onSubmit() {
    if (this.isEditMode) {
      if (this.anxdebForm.valid) {
        this.snackBar.open('Form submitted successfully!', 'Close', { duration: 3000 });
        console.log(this.anxdebForm.value);
        this.isEditMode = false;
        this.toggleFormControls(false);
      } else {
        this.snackBar.open('Please correct the errors in the form.', 'Close', { duration: 3000 });
        Object.keys(this.anxdebForm.controls).forEach(field => {
          const control = this.anxdebForm.get(field);
          control.markAsTouched({ onlySelf: true });
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