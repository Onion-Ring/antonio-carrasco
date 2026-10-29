import { Component } from '@angular/core';
import { WorkExperience } from '../work-experience/work-experience';
import { TechStack } from '../tech-stack/tech-stack';
import { Education } from '../education/education';
import { Certifications } from '../certifications/certifications';
import { Projects } from '../projects/projects';

@Component({
  selector: 'app-main-contents',
  imports: [WorkExperience, TechStack, Education, Certifications, Projects],
  templateUrl: './main-contents.html',
  styleUrl: './main-contents.css',
})
export class MainContents {

}
