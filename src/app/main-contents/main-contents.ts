import { Component } from '@angular/core';
import { WorkExperience } from '../work-experience/work-experience';
import { TechStack } from '../tech-stack/tech-stack';
import { Education } from '../education/education';

@Component({
  selector: 'app-main-contents',
  imports: [WorkExperience, TechStack, Education],
  templateUrl: './main-contents.html',
  styleUrl: './main-contents.css',
})
export class MainContents {

}
