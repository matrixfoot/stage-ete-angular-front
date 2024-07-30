import { Component } from '@angular/core';
import { FormBuilder, FormGroup,FormControl, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-facdet',
   standalone: true,
  imports: [ReactiveFormsModule,CommonModule ],
  templateUrl: './facdet.component.html',
  styleUrl: './facdet.component.scss'
})
export class FACDETComponent {
facdetForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.facdetForm = this.fb.group({
      DF00: ['DF', [Validators.required, Validators.maxLength(2)]],
      DF01: ['0000000', [Validators.required, Validators.maxLength(7), Validators.pattern('^[0-9]*$')]],
      DF02: [' '.repeat(1), [Validators.required, Validators.maxLength(1), Validators.pattern('^[A-Za-z0-9 ]*$')]],
      DF03: [' '.repeat(1), [Validators.required, Validators.maxLength(1), Validators.pattern('^[A-Za-z0-9 ]*$')]],
      DF04: ['000', [Validators.required, Validators.maxLength(3), Validators.pattern('^[0-9]*$')]],
      DF05: [' '.repeat(4), [Validators.required, Validators.maxLength(4), Validators.pattern('^[A-Za-z0-9 ]*$')]],
     

      DF06: [' '.repeat(5), [Validators.required, Validators.maxLength(2), Validators.pattern('^(T1|T2|T3|T4)$')]],
      DF07: ['000000', [Validators.required, Validators.maxLength(6), Validators.pattern('^[0-9]*$')]],
      DF08: [' '.repeat(20), [Validators.required, Validators.maxLength(20), Validators.pattern('^[A-Za-z0-9 ]*$')]],
DF09: ['00000000', [Validators.required, Validators.maxLength(8), Validators.pattern('^[0-9]{8}$')]],      
      DF10: ['0', [Validators.required, Validators.maxLength(1), Validators.pattern(/^1|2|3|4$/)]],
      DF11: [' '.repeat(13), [Validators.required, Validators.maxLength(13), Validators.pattern('^[A-Za-z0-9 ]*$')]],
      DF12: [' '.repeat(40), [Validators.required, Validators.maxLength(40),Validators.pattern('^[A-Za-z0-9 ]*$')]],
      DF13: [' '.repeat(120), [Validators.required, Validators.maxLength(120), Validators.pattern('^[A-Za-z0-9 ]*$'), this.noForbiddenCharacters]],
      DF14: [' '.repeat(20), [Validators.required, Validators.maxLength(20), Validators.pattern('^[A-Za-z0-9 ]*$'), this.noForbiddenCharacters]],
      
      DF15: ['00000000', [Validators.required, Validators.maxLength(8), Validators.pattern('^[0-9]*$')]],
      DF16: ['000000000000000', [Validators.required, Validators.maxLength(15), Validators.pattern('^[0-9]*$')]],
      DF17: ['00000', [Validators.required, Validators.maxLength(5), Validators.pattern('^[0-9]*$')]],
      DF18: ['000000000000000', [Validators.required, Validators.maxLength(5), Validators.pattern('^[0-9]*$'),this.noSeparatorsValidator]],
      DF19: ['00000', [Validators.required, Validators.maxLength(5), Validators.pattern('^[0-9]*$')]],
      DF20: ['000000000000000', [Validators.required, Validators.maxLength(15), Validators.pattern('^[0-9]*$')]],
      DF21: ['00000', [Validators.required, Validators.maxLength(5), Validators.pattern('^[0-9]*$')]],
      DF22: ['000000000000000', [Validators.required, Validators.maxLength(15), Validators.pattern('^[0-9]*$'),this.noSeparatorsValidator]],
       
       
    });
    this.addNumericValidation();
  }

  addNumericValidation(): void {
    const numericControls = ['DF01', 'DF04', 'DF07', 'DF09', 'DF10', 'DF17', 'DF15', 'DF16','DF18','DF19','DF20','DF21','DF22'];
    numericControls.forEach(controlName => {
      const control = this.facdetForm.get(controlName);
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
    const numericFields = ['DF01', 'DF04', 'DF07', 'DF09', 'DF10', 'DF17', 'DF15', 'DF16','DF18','DF19','DF20','DF21','DF22'];
    return numericFields.includes(key);
  }

  onSubmit(): void {
    try {
      console.log(this.facdetForm.value);
      if (this.facdetForm.valid) {
        const formData = this.facdetForm.value;
        const formattedData = {};

        Object.keys(formData).forEach(key => {
          const value = formData[key];
          const type = this.getControlType(key);
          const length = this.getControlLength(key);

          try {
            if (type === 'X') {
              formattedData[key] = this.formatAlphanumeric(value, length);
            } else if (type === 'N') {
              formattedData[key] = this.formatNumeric(parseFloat(value), length);
            }
            if (key === 'DF09' || key === 'DF15') {
              formattedData[key] = this.formatDate(new Date(value));
            }
            if (key === 'DF17' || key === 'DF19' || key === 'DF21') {
              formattedData[key] = this.formatRate(parseFloat(value));
            }
          } catch (error) {
            console.error(`Error formatting field ${key}:`, error);
          }
        });

        console.log(formattedData);
      } else {
        console.error('Form is invalid');
      }
    } catch (error) {
      console.error('Error processing form submission:', error);
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

  getControlType(key: string): string {
    const types = {
      DF00: 'X',
      DF01: 'N',
      DF02: 'X',
      DF03: 'X',
      DF04: 'N',
      DF05: 'X',
      DF06: 'X',
      DF07: 'N',
      DF08: 'X',
      DF09: 'X',
      DF10: 'N',
      DF11: 'X',
      DF12: 'X',
      DF13: 'X',
      DF14: 'X',
      DF15: 'N',
      DF16: 'N',
      DF17: 'N',
      DF18: 'N',
      DF19: 'N',
      DF20: 'N',
      DF21: 'N',
      DF22: 'N',
    };
    return types[key] || 'X';
  }

  getControlLength(key: string): number {
    const lengths = {
      DF00: 2,
      DF01: 7,
      DF02: 1,
      DF03: 1,
      DF04: 3,
      DF05: 4,
      DF06: 2,
      DF07: 6,
      DF08: 20,
      DF09: 8,
      DF10: 1,
      DF11: 13,
      DF12: 40,
      DF13: 120,
      DF14: 20,
      DF15: 8,
      DF16: 15,
      DF17: 5,
      DF18: 15,
      DF19: 5,
      DF20: 15,
      DF21: 5,
      DF22: 15
    };
    return lengths[key] || 0;
  }

  noForbiddenCharacters(control: AbstractControl): ValidationErrors | null {
    const forbidden = /[<>]/.test(control.value);
    return forbidden ? { forbiddenCharacters: { value: control.value } } : null;
  }

  formatAlphanumeric(value: string, length: number): string {
    return value.padEnd(length, ' ').slice(0, length);
  }

  formatNumeric(value: number, length: number): string {
    return value.toString().padStart(length, '0').slice(-length);
  }

  formatRate(rate: number): string {
    return this.formatNumeric(rate * 100, 5); // Ex: 2.5% -> 00250
  }

  formatAmount(amount: number): string {
    return this.formatNumeric(amount, 15); // Ex: 12345 -> 000000012345
  }

  formatDate(date: Date): string {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}${month}${year}`;
  }

  calculateTotal(amounts: number[]): number {
    return amounts.reduce((total, amount) => total + amount, 0);
  }

 noSeparatorsValidator(control: FormControl) {
    const value = control.value;
    const noSeparators = /^[0-9]+$/.test(value);
    return noSeparators ? null : { 'noSeparators': true };
  }



}


