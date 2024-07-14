import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-anx2p3',
  templateUrl: './anx2p3.component.html',
  styleUrls: ['./anx2p3.component.scss']
})
export class Anx2p3Component   implements OnInit {
  anxdebForm: FormGroup;
   
  isEditMode: boolean = false;
   

  constructor(private fb: FormBuilder, private snackBar: MatSnackBar) {}

  ngOnInit() {
    this.anxdebForm = this.fb.group({
      T200: [{ value: 'T2', disabled: true }, [Validators.required, this.validateE100]],
      T001: ['', [Validators.required, Validators.pattern('^[0-9]{7}$')]],
      T002: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9]{1}$')]],
      T003: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9]{1}$'), this.validateE003]],
      T004: [{ value: '000', disabled: true }, [Validators.required, this.validateE004]],
      T205: ['', Validators.pattern('^[a-zA-Z0-9]{4}$')],
      T206:  ['', Validators.pattern('^[a-zA-Z0-9]{221}$')],
      T207: ['', [Validators.required, Validators.pattern( '^[0-9]{15}$')]],
      T208: ['', Validators.pattern( '^[0-9]{15}$')],
      T209: ['', Validators.pattern( '^[0-9]{15}$')],
      T210: ['', Validators.pattern( '^[0-9]{15}$')],
      T211: ['', Validators.pattern( '^[0-9]{15}$')],
      T212: ['', Validators.pattern(  '^[0-9]{15}$')],
      T213: ['', Validators.pattern('^[0-9]{15}$')],
      T214: ['', Validators.pattern('^[0-9]{15}$')],
      T215: ['', Validators.pattern('^[0-9]{15}$')],
      T216: ['', Validators.pattern('^[0-9]{15}$')],
      T217: ['', Validators.pattern('^[a-zA-Z0-9]{19}$')],
    });

   

    this.toggleFormControls(false);
    
  }

  validateE100(control: FormControl) {
    return control.value === '  T2' ? null : { invalidValue: true };
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
      this.anxdebForm.controls['T200'].disable();
      this.anxdebForm.controls['T004'].disable();
      this.anxdebForm.controls['T206'].disable();
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