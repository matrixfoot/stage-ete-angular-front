import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatTabsModule} from '@angular/material/tabs';
import { MatNativeDateModule } from '@angular/material/core';


const materials = [MatSlideToggleModule,MatCheckboxModule,MatDatepickerModule,MatFormFieldModule,MatNativeDateModule,MatTabsModule];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSlideToggleModule,MatCheckboxModule,MatDatepickerModule,MatFormFieldModule,MatNativeDateModule,MatTabsModule
  ],
  exports: [materials]
})
export class MaterialModule { }
