import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FactureComponent } from './facture/facture.component';
import { FactureProformaComponent } from './facture-proforma/facture-proforma.component';
import { DevisComponent } from './devis/devis.component';
import { FormsModule } from '@angular/forms';
import { InvoiceGeneratorComponent } from './invoice-generator/invoice-generator.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader'




export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    FactureComponent,
    FactureProformaComponent,
    DevisComponent,
    InvoiceGeneratorComponent
  ],
  imports: [
    CommonModule,FormsModule, HttpClientModule,   TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ]

})
  
export class FacturationModule { }

