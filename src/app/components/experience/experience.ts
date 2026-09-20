import { Component } from '@angular/core';
import { experiences, earlierExperience } from '../../data/portfolio';
@Component({
  selector: 'app-experience',
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class Experience {
  protected readonly experiences = experiences;
  protected readonly earlierExperience = earlierExperience;
}
