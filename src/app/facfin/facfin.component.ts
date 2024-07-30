import { Component } from '@angular/core';
import { FormBuilder, FormGroup,FormControl, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

declare var bootstrap: any;

@Component({
  selector: 'app-facfin',
  standalone: true,
  
  imports: [ReactiveFormsModule,CommonModule ],
  templateUrl: './facfin.component.html',
  styleUrl: './facfin.component.scss'
})
export class FACFINComponent {
  facfinForm: FormGroup;
  
  constructor(private fb: FormBuilder, ) { }
  
  ngOnInit():void {
    this.facfinForm = this.fb.group({
      TF00: ['TF', [Validators.required, Validators.maxLength(2)]],
      TF01: ['0000000', [Validators.required, Validators.maxLength(7), Validators.pattern('^[0-9]*$')]],
      TF02: [' '.repeat(1), [Validators.required, Validators.maxLength(1), Validators.pattern(('^[A-Za-z0-9 ]*$'))]],
      TF03: [' '.repeat(1), [Validators.required, Validators.maxLength(1), Validators.pattern(('^[A-Za-z0-9 ]*$'))]],
      TF04: ['000', [Validators.required, Validators.maxLength(3), Validators.pattern('^[0-9]*$')]],
      TF05: [' '.repeat(4), [Validators.required, Validators.maxLength(4), Validators.pattern('^[A-Za-z0-9 ]*$')]],
      TF06: [' '.repeat(5), [Validators.required, Validators.maxLength(2), Validators.pattern('^(T1|T2|T3|T4)$')]],
      TF07: ['000000', [Validators.required, Validators.maxLength(6), Validators.pattern('^[0-9]*$')]],
      TF08: [' '.repeat(230), [Validators.required, Validators.maxLength(230), Validators.pattern(('^[A-Za-z0-9 ]*$'))]],
      TF09: ['000000000000000', [Validators.required, Validators.maxLength(15), Validators.pattern('^[0-9]*$')]],
      TF10: ['00000', [Validators.required, Validators.maxLength(5), Validators.pattern('^[0-9]*$')]],
      TF11: ['000000000000000', [Validators.required, Validators.maxLength(15), Validators.pattern('^[0-9]*$')]],
      TF12: ['00000', [Validators.required, Validators.maxLength(5), Validators.pattern('^[0-9]*$')]],
      TF13: ['000000000000000', [Validators.required, Validators.maxLength(15), Validators.pattern('^[0-9]*$')]],
      TF14: ['00000', [Validators.required, Validators.maxLength(5), Validators.pattern('^[0-9]*$')]],
      TF15: ['000000000000000', [Validators.required, Validators.maxLength(15), Validators.pattern('^[0-9]*$')]]



    });
    this.addNumericValidation();


  }
  

  onSubmit(): void {
    try {
      console.log(this.facfinForm.value);
      if (this.facfinForm.valid) {
        /* this.openModal(); */
        const formData = this.facfinForm.value;
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
addNumericValidation(): void {
        const numericControls = ['TF01', 'TF04', 'TF07', 'TF09', 'TF10', 'TF11', 'TF15', 'TF12','TF13','TF14','TF15'];

    numericControls.forEach(controlName => {
      const control = this.facfinForm.get(controlName);
      if (control) {
        control.valueChanges.subscribe(value => {
          if (this.isNumeric(controlName) && !/^\d*$/.test(value)) {
            control.setValue(value.replace(/\D/g, ''), { emitEvent: false });
          }
        });
      }
    });
  }


  /* openModal() {
    const modalElement = document.getElementById('successModal');
    if (modalElement) {
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
    }
  } */
  
  isNumeric(key: string): boolean {
    const numericFields = ['TF01', 'TF04', 'TF07', 'TF09', 'TF10', 'TF11', 'TF15', 'TF12','TF13','TF14','TF15'];
    return numericFields.includes(key);
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
      TF00: 'X',
      TF01: 'N',
      TF02: 'X',
      TF03: 'X',
      TF04: 'N',
      TF05: 'X',
      TF06: 'X',
      TF07: 'N',
      TF08: 'X',
      TF09: 'N',
      TF10: 'N',
      TF11: 'N',
      TF12: 'N',
      TF13: 'N',
      TF14: 'N',
      TF15: 'N',

    };
    return types[key] || 'X';
  }

  getControlLength(key: string): number {
    const lengths = {
      TF00: 2,
      TF01: 7,
      TF02: 1,
      TF03: 1,
      TF04: 3,
      TF05: 4,
      TF06: 2,
      TF07: 6,
      TF08: 230,
      TF09: 15,
      TF10: 5,
      TF11: 15,
      TF12: 5,
      TF13: 15,
      TF14: 5,
      TF15: 15,

     
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
