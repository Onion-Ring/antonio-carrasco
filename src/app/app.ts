import { Component } from '@angular/core';
import { Hero } from './hero/hero';
import { MainContents } from './main-contents/main-contents';

@Component({
  selector: 'app-root',
  imports: [Hero, MainContents],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Portfolio-MKII';
}
