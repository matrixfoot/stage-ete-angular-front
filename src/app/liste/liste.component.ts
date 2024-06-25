import { Component, ViewChild, ViewContainerRef, ComponentFactoryResolver, ComponentRef } from '@angular/core';
import { RetenueSourceComponent } from '../retenue-source/retenue-source.component';
import { TFPComponent } from '../tfp/tfp.component';
import { SelectComponent } from '../select/select.component';
import { FoprolosComponent } from '../foprolos/foprolos.component';
import { TclComponent } from '../tcl/tcl.component';
import { TimbreComponent } from '../timbre/timbre.component';
import { TVAComponent } from '../tva/tva.component';
import { Select1Component } from '../select1/select1.component';
// Importez les autres composants selon vos besoins

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.scss']
})
export class ListeComponent {
  @ViewChild('dynamicComponentContainer', { read: ViewContainerRef }) container: ViewContainerRef;
  componentRef: ComponentRef<any>;
  checkboxStates = [false, false, false, false, false, false];
  selectedCheckbox: number | null = null;

  constructor(private resolver: ComponentFactoryResolver) {}

  toggleCheckbox(index: number) {
    this.checkboxStates = this.checkboxStates.map((state, i) => i === index ? !state : state);
    this.selectedCheckbox = this.checkboxStates[index] ? index : null;
    this.loadComponent(index);
  }

  loadComponent(index: number) {
    if (this.componentRef) {
      this.componentRef.destroy();
    }

    let componentFactory;
    switch (index) {
      case 0:
        componentFactory = this.resolver.resolveComponentFactory(SelectComponent);
        break;
      case 1:
        componentFactory = this.resolver.resolveComponentFactory(TFPComponent);
        break;
        case 2:
 
        componentFactory = this.resolver.resolveComponentFactory(FoprolosComponent );
        break;
        case 3:
 
        componentFactory = this.resolver.resolveComponentFactory(TVAComponent );
        break;
        case 5:
 
        componentFactory = this.resolver.resolveComponentFactory(TclComponent );
        break;
        case 4:
 
        componentFactory = this.resolver.resolveComponentFactory(TimbreComponent );
        break;
      // Ajoutez les autres cas pour les autres composants
      default:
        return;
    }

    this.componentRef = this.container.createComponent(componentFactory);
  }
}