import { Component, ViewChild, ViewContainerRef, ComponentFactoryResolver, ComponentRef } from '@angular/core';
import { SelectComponent } from '../select/select.component';

@Component({
  selector: 'app-retenue-source',
  templateUrl: './retenue-source.component.html',
  styleUrls: ['./retenue-source.component.scss']
})
export class RetenueSourceComponent {
  @ViewChild('dynamicComponentContainer', { read: ViewContainerRef }) container: ViewContainerRef;
  componentRef: ComponentRef<SelectComponent>;

  tooltipText: string = '';
  isTooltipVisible: boolean = false;

  constructor(private resolver: ComponentFactoryResolver) {}

  loadSelectComponent() {
    if (this.componentRef) {
      this.componentRef.destroy();
    }

    const factory = this.resolver.resolveComponentFactory(SelectComponent);
    this.componentRef = this.container.createComponent(factory);
  }

  showTooltip(event: MouseEvent) {
    const inputElement = event.target as HTMLInputElement;
    const tooltipMessage = inputElement.getAttribute('data-tooltip');
    console.log('Tooltip message:', tooltipMessage);  // Log de débogage
    this.tooltipText = tooltipMessage || '';
    this.isTooltipVisible = true;
  }

  hideTooltip() {
    console.log('Hiding tooltip');  // Log de débogage
    this.isTooltipVisible = false;
  }
}