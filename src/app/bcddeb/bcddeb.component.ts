import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-bcddeb',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './bcddeb.component.html',
  styleUrls: ['./bcddeb.component.scss']
})
export class BCDDEBComponent implements OnInit {
  bcddebForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.bcddebForm = this.fb.group({
      EF00: ['EF', [Validators.required, Validators.maxLength(2)]],
      EF01: ['0000000', [Validators.required, Validators.maxLength(7), Validators.pattern(/^\d+$/)]],
      EF02: ['0', [Validators.required, Validators.maxLength(1), Validators.pattern(/^\d$/)]],
      EF03: ['0', [Validators.required, Validators.maxLength(1), Validators.pattern(/^\d$/)]],
      EF04: ['000', [Validators.required, Validators.maxLength(3), Validators.pattern(/^000$/)]],
      EF05: ['0000', [Validators.required, Validators.maxLength(4), Validators.pattern(/^\d{4}$/)]],
      EF06: ['T1', [Validators.required, Validators.pattern(/^T[1-4]$/)]],
      EF07: [' '.repeat(40), [Validators.required, Validators.maxLength(40), this.noForbiddenCharacters]],
      EF08: [' '.repeat(40), [Validators.required, Validators.maxLength(40), this.noForbiddenCharacters]],
      EF09: [' '.repeat(72), [Validators.required, Validators.maxLength(72), this.noForbiddenCharacters]],
      EF10: [' '.repeat(40), [Validators.required, Validators.maxLength(40)]],
      EF11: ['0000', [Validators.required, Validators.maxLength(4), Validators.pattern(/^\d{4}$/)]],
      EF12: ['0000', [Validators.required, Validators.maxLength(4), Validators.pattern(/^\d{4}$/)]]
    });

    this.addNumericValidation();
  }

  addNumericValidation(): void {
    const numericControls = ['EF01',  'EF04', 'EF11', 'EF12'];
    numericControls.forEach(controlName => {
      const control = this.bcddebForm.get(controlName);
      if (control) {
        control.valueChanges.subscribe(value => {
          if (this.isNumeric(controlName) && !/^\d*$/.test(value)) {
            control.setValue(value.replace(/\D/g, ''), { emitEvent: false });
          }
        });
      }
    });
  }

  isNumeric(key: string): boolean {
    const numericFields = ['EF01', 'EF02', 'EF03', 'EF04', 'EF05', 'EF11', 'EF12'];
    return numericFields.includes(key);
  }

  onSubmit(): void {
    if (this.bcddebForm.valid) {
      const formValue = this.bcddebForm.value;
      // Apply formatting before submission
      Object.keys(formValue).forEach(key => {
        const type = this.getControlType(key);
        const length = this.getControlLength(key);
        formValue[key] = this.padValue(formValue[key], type, length);
      });
      console.log(formValue);
    }
  }

  padValue(value: string, type: string, length: number): string {
    if (type === 'X') {
      return value.padEnd(length, ' ');
    } else if (type === 'N') {
      return value.padStart(length, '0');
    }
    return value;
  }

  noForbiddenCharacters(control: AbstractControl): ValidationErrors | null {
    const forbidden = /[<>]/.test(control.value);
    return forbidden ? { forbiddenCharacters: { value: control.value } } : null;
  }

  getControlType(key: string): string {
    const types = {
      EF00: 'X',
      EF01: 'N',
      EF02: 'X',
      EF03: 'X',
      EF04: 'N',
      EF05: 'X',
      EF06: 'X',
      EF07: 'X',
      EF08: 'X',
      EF09: 'X',
      EF10: 'X',
      EF11: 'N',
      EF12: 'N'
    };
    return types[key] || 'X';
  }

  getControlLength(key: string): number {
    const lengths = {
      EF00: 2,
      EF01: 7,
      EF02: 1,
      EF03: 1,
      EF04: 3,
      EF05: 4,
      EF06: 2,
      EF07: 40,
      EF08: 40,
      EF09: 72,
      EF10: 40,
      EF11: 4,
      EF12: 4
    };
    return lengths[key] || 0;
  }
}
