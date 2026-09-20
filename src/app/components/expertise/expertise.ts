import { Component } from '@angular/core';
import { skillGroups } from '../../data/portfolio';
@Component({
  selector: 'app-expertise',
  templateUrl: './expertise.html',
  styleUrl: './expertise.scss',
})
export class Expertise {
  protected readonly skillGroups = skillGroups;
}
