import { Component } from '@angular/core';

@Component({
  selector: 'app-foprolos',
  templateUrl: './foprolos.component.html',
  styleUrls: ['./foprolos.component.scss']
})
export class FoprolosComponent {
  tooltipText: string = ''; // Variable to store tooltip message
  isTooltipVisible: boolean = false; // Variable to control tooltip visibility

  showTooltip(event: MouseEvent) {
    const inputElement = event.target as HTMLInputElement;
    const tooltipMessage = inputElement.getAttribute('data-tooltip');
    console.log('Tooltip message:', tooltipMessage);  // Debug logging
    this.tooltipText = tooltipMessage || '';
    this.isTooltipVisible = true;
  }

  hideTooltip() {
    console.log('Hiding tooltip');  // Debug logging
    this.isTooltipVisible = false;
  }
}