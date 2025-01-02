import { Component, OnInit } from '@angular/core';
import { StepsService } from '../steps.service';
import { IStep } from '../IStep.interface';
import { EscenaComponent } from '../escena/escena.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [EscenaComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  steps: IStep[] = [];

  constructor(private stepsService: StepsService) {}

  ngOnInit(): void {
    this.steps = this.stepsService.getSteps();
  }
}
