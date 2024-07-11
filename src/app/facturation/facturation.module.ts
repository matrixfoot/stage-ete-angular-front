import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FactureComponent } from './facture/facture.component';
import { FactureProformaComponent } from './facture-proforma/facture-proforma.component';
import { DevisComponent } from './devis/devis.component';
import { FormsModule } from '@angular/forms';
import { InvoiceGeneratorComponent } from './invoice-generator/invoice-generator.component';




@NgModule({
  declarations: [
    FactureComponent,
    FactureProformaComponent,
    DevisComponent,
    InvoiceGeneratorComponent
  ],
  imports: [
    CommonModule,FormsModule
  ]
})
export class FacturationModule { }
