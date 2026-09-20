import { Component } from '@angular/core';
import { projects } from '../../data/portfolio';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  protected readonly projects = projects;
}
