import { Component } from '@angular/core';
import { Hero } from './hero/hero';
import { MainContents } from './main-contents/main-contents';
import { NavigationComponent } from './navigation-component/navigation-component';

@Component({
  selector: 'app-root',
  imports: [Hero, MainContents, NavigationComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Portfolio-MKII';
}
