import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-anx1fin',
  templateUrl: './anx1fin.component.html',
  styleUrls: ['./anx1fin.component.scss']
})
export class Anx1finComponent implements OnInit {
  anxdebForm: FormGroup;
   
  isEditMode: boolean = false;
   

  constructor(private fb: FormBuilder, private snackBar: MatSnackBar) {}

  ngOnInit() {
    this.anxdebForm = this.fb.group({
      T100: [{ value: 'T1', disabled: true }, [Validators.required, this.validateE100]],
      T001: ['', [Validators.required, Validators.pattern('^[0-9]{7}$')]],
      T002: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9]{1}$')]],
      T003: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9]{1}$'), this.validateE003]],
      T004: [{ value: '000', disabled: true }, [Validators.required, this.validateE004]],
      T105: ['', Validators.pattern('^[a-zA-Z0-9]{4}$')],
      T106:  ['', Validators.pattern('^[a-zA-Z0-9]{242}$')],
      T107: ['', [Validators.required, Validators.pattern( '^[0-9]{15}$')]],
      T108: ['', Validators.pattern( '^[0-9]{15}$')],
      T109: ['', Validators.pattern( '^[0-9]{15}$')],
      T110: ['', Validators.pattern( '^[0-9]{15}$')],
      T111: ['', Validators.pattern( '^[0-9]{15}$')],
      T112: ['', Validators.pattern(  '^[0-9]{15}$')],
      T113: ['', Validators.pattern('^[0-9]{15}$')],
      T114: ['', Validators.pattern('^[0-9]{15}$')],
      T115: ['', Validators.pattern('^[a-zA-Z0-9]{19}$')],
    });

   

    this.toggleFormControls(false);
    
  }

  validateE100(control: FormControl) {
    return control.value === '  T1' ? null : { invalidValue: true };
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
      this.anxdebForm.controls['T100'].disable();
      this.anxdebForm.controls['T004'].disable();
      this.anxdebForm.controls['T106'].disable();
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