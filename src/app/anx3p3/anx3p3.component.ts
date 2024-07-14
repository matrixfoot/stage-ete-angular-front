import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-anx3p3',
  templateUrl: './anx3p3.component.html',
  styleUrls: ['./anx3p3.component.scss']
})
export class Anx3p3Component   implements OnInit {
  anxdebForm: FormGroup;
   
  isEditMode: boolean = false;
   

  constructor(private fb: FormBuilder, private snackBar: MatSnackBar) {}

  ngOnInit() {
    this.anxdebForm = this.fb.group({
      T300: [{ value: 'T3', disabled: true }, [Validators.required, this.validateE100]],
      T001: ['', [Validators.required, Validators.pattern('^[0-9]{7}$')]],
      T002: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9]{1}$')]],
      T003: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9]{1}$'), this.validateE003]],
      T004: [{ value: '000', disabled: true }, [Validators.required, this.validateE004]],
      T305: ['', Validators.pattern('^[a-zA-Z0-9]{4}$')],
      T306:  ['', Validators.pattern('^[a-zA-Z0-9]{220}$')],
      T307: ['', [Validators.required, Validators.pattern( '^[0-9]{15}$')]],
      T308: ['', Validators.pattern( '^[0-9]{15}$')],
      T309: ['', Validators.pattern( '^[0-9]{15}$')],
      T310: ['', Validators.pattern( '^[0-9]{15}$')],
      T311: ['', Validators.pattern( '^[0-9]{15}$')],
       
      
      T312: ['', Validators.pattern('^[a-zA-Z0-9]{86}$')],
    });

   

    this.toggleFormControls(false);
    
  }

  validateE100(control: FormControl) {
    return control.value === '  T3' ? null : { invalidValue: true };
  } 
 
  validateE003(control: FormControl) {
    return control.value !== 'E' ? null : { invalidValue: true };
  }

  validateE004(control: FormControl) {
    return control.value === '000' ? null : { invalidValue: true };
  }

  validateE106(control: FormControl) {
    return control.value === 'An1' ? null : { invalidValue: true };
  }

  toggleFormControls(enable: boolean) {
    if (enable) {
      this.anxdebForm.enable();
      this.anxdebForm.controls['T300'].disable();
      this.anxdebForm.controls['T004'].disable();
      this.anxdebForm.controls['T306'].disable();
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