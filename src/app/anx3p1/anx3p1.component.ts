import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-anx3p1',
  templateUrl: './anx3p1.component.html',
  styleUrls: ['./anx3p1.component.scss']
})
export class Anx3p1Component implements OnInit {
  anxdebForm: FormGroup;
   
  isEditMode: boolean = false;
   

  constructor(private fb: FormBuilder, private snackBar: MatSnackBar) {}

  ngOnInit() {
    this.anxdebForm = this.fb.group({
      E300: [{ value: 'E3', disabled: true }, [Validators.required, this.validateE300]],
      E001: ['', [Validators.required, Validators.pattern('^[0-9]{7}$')]],
      E002: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9]{1}$')]],
      E003: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9]{1}$'), this.validateE003]],
      E004: [{ value: '000', disabled: true }, [Validators.required, this.validateE004]],
      E305: ['', Validators.pattern('^[a-zA-Z0-9]{4}$')],
      E306: [{ value: 'An3', disabled: true }, [Validators.required, this.validateE306]],
      E307: ['', [Validators.required, Validators.pattern('^[012]{1}$')]],
      E308: ['', Validators.pattern('^[0-9]{6}$')],
      E309: ['', Validators.pattern('^[a-zA-Z0-9]{40}$')],
      E310: ['', Validators.pattern('^[a-zA-Z0-9]{40}$')],
      E311: ['', Validators.pattern('^[a-zA-Z0-9]{40}$')],
      E312: ['', Validators.pattern('^[a-zA-Z0-9]{72}$')],
      E313: ['', Validators.pattern('^[0-9]{4}$')],
      E314: ['', Validators.pattern('^[0-9]{4}$')],
      E315: ['', Validators.pattern('^[a-zA-Z0-9]{171}$')],
    });

   

    this.toggleFormControls(false);
    
  }

  validateE300(control: FormControl) {
    return control.value === 'E3' ? null : { invalidValue: true };
  } 
  validateA1(control: FormControl) {
    return control.value === 'L1' ? null : { invalidValue: true };
  }

  validateE003(control: FormControl) {
    return control.value !== 'E' ? null : { invalidValue: true };
  }

  validateE004(control: FormControl) {
    return control.value === '000' ? null : { invalidValue: true };
  }

  validateE306(control: FormControl) {
    return control.value === 'An3' ? null : { invalidValue: true };
  }

  toggleFormControls(enable: boolean) {
    if (enable) {
      this.anxdebForm.enable();
      this.anxdebForm.controls['E300'].disable();
      this.anxdebForm.controls['E004'].disable();
      this.anxdebForm.controls['E306'].disable();
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