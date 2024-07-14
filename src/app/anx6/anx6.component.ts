import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-anx6',
  templateUrl: './anx6.component.html',
  styleUrls: ['./anx6.component.scss']
})
export class Anx6Component  implements OnInit {
  anxdebForm: FormGroup;
   
  isEditMode: boolean = false;
   

  constructor(private fb: FormBuilder, private snackBar: MatSnackBar) {}

  ngOnInit() {
    this.anxdebForm = this.fb.group({
      E600: [{ value: 'E6', disabled: true }, [Validators.required, this.validateE600]],
      E001: ['', [Validators.required, Validators.pattern('^[0-9]{7}$')]],
      E002: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9]{1}$')]],
      E003: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9]{1}$'), this.validateE003]],
      E004: [{ value: '000', disabled: true }, [Validators.required, this.validateE004]],
      E605: ['', Validators.pattern('^[a-zA-Z0-9]{4}$')],
      E606: [{ value: 'An6', disabled: true }, [Validators.required, this.validateE606]],
      E607: ['', [Validators.required, Validators.pattern('^[012]{1}$')]],
      E608: ['', Validators.pattern('^[0-9]{6}$')],
      E609: ['', Validators.pattern('^[a-zA-Z0-9]{40}$')],
      E610: ['', Validators.pattern('^[a-zA-Z0-9]{40}$')],
      E611: ['', Validators.pattern('^[a-zA-Z0-9]{40}$')],
      E612: ['', Validators.pattern('^[a-zA-Z0-9]{72}$')],
      E613: ['', Validators.pattern('^[0-9]{4}$')],
      E614: ['', Validators.pattern('^[0-9]{4}$')],
      E615: ['', Validators.pattern('^[a-zA-Z0-9]{171}$')],
    });

   

    this.toggleFormControls(false);
    
  }

  validateE600(control: FormControl) {
    return control.value === 'E6' ? null : { invalidValue: true };
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

  validateE606(control: FormControl) {
    return control.value === 'An6' ? null : { invalidValue: true };
  }

  toggleFormControls(enable: boolean) {
    if (enable) {
      this.anxdebForm.enable();
      this.anxdebForm.controls['E600'].disable();
      this.anxdebForm.controls['E004'].disable();
      this.anxdebForm.controls['E606'].disable();
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