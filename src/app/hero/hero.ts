import { Component, AfterContentInit, signal } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})

export class Hero implements AfterContentInit {  

  public openToWork = signal<boolean>(true);
  public isHamburgerMenuOpen = signal<boolean>(false);
  public currentAge = signal<number>(0);

  ngAfterContentInit(): void {
    const msPerDay = 1000 * 60 * 60 * 24;
    const birthDate = new Date('2002-02-10');
    const currentDate = new Date();
    const totalMs = currentDate.getTime() - birthDate.getTime();
    this.currentAge.set(Math.floor((totalMs / msPerDay) / 365));
  }  
  
}
