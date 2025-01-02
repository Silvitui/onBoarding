
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IStep } from '../IStep.interface';
import { trigger, transition, animate, style, state } from '@angular/animations';

@Component({
  selector: 'app-escena',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './escena.component.html',
  styleUrls: ['./escena.component.scss'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ transform: 'translateY(20px) scale(0.95)', opacity: 0 }),
        animate('500ms cubic-bezier(0.4, 0.0, 0.2, 1)', style({ transform: 'translateY(0) scale(1)', opacity: 1 })),
      ]),
      transition(':leave', [
        animate('500ms cubic-bezier(0.4, 0.0, 0.2, 1)', style({ transform: 'translateY(-20px) scale(0.95)', opacity: 0 })),
      ]),
    ]),
  ],
})
export class EscenaComponent {
  @Input() steps: IStep[] = [];
  currentStep: number = 0;



  goToStep(index: number): void {
    if (index >= 0 && index < this.steps.length) {
      this.currentStep = index;
    }
  }

  nextStep(): void {
    if (this.currentStep < this.steps.length - 1) {
      this.currentStep++;
    }
  }

  prevStep(): void {
    if (this.currentStep > 0) {
      this.currentStep--;
    }
  }
}