import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-anx7p1',
  templateUrl: './anx7p1.component.html',
  styleUrls: ['./anx7p1.component.scss']
})
export class Anx7p1Component implements OnInit {
  anxdebForm: FormGroup;
   
  isEditMode: boolean = false;
   

  constructor(private fb: FormBuilder, private snackBar: MatSnackBar) {}

  ngOnInit() {
    this.anxdebForm = this.fb.group({
      E700: [{ value: 'E7', disabled: true }, [Validators.required, this.validateE700]],
      E001: ['', [Validators.required, Validators.pattern('^[0-9]{7}$')]],
      E002: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9]{1}$')]],
      E003: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9]{1}$'), this.validateE003]],
      E004: [{ value: '000', disabled: true }, [Validators.required, this.validateE004]],
      E705: ['', Validators.pattern('^[a-zA-Z0-9]{4}$')],
      E706: [{ value: 'An7', disabled: true }, [Validators.required, this.validateE706]],
      E707: ['', [Validators.required, Validators.pattern('^[012]{1}$')]],
      E708: ['', Validators.pattern('^[0-9]{6}$')],
      E709: ['', Validators.pattern('^[a-zA-Z0-9]{40}$')],
      E710: ['', Validators.pattern('^[a-zA-Z0-9]{40}$')],
      E711: ['', Validators.pattern('^[a-zA-Z0-9]{40}$')],
      E712: ['', Validators.pattern('^[a-zA-Z0-9]{72}$')],
      E713: ['', Validators.pattern('^[0-9]{4}$')],
      E714: ['', Validators.pattern('^[0-9]{4}$')],
      E715: ['', Validators.pattern('^[a-zA-Z0-9]{171}$')],
    });

   

    this.toggleFormControls(false);
    
  }

  validateE700(control: FormControl) {
    return control.value === 'E7' ? null : { invalidValue: true };
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

  validateE706(control: FormControl) {
    return control.value === 'An6' ? null : { invalidValue: true };
  }

  toggleFormControls(enable: boolean) {
    if (enable) {
      this.anxdebForm.enable();
      this.anxdebForm.controls['E700'].disable();
      this.anxdebForm.controls['E004'].disable();
      this.anxdebForm.controls['E706'].disable();
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
