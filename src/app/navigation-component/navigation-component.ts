import { Component, AfterViewInit, HostListener } from '@angular/core';




@Component({
  selector: 'app-navigation-component',  
  imports: [],
  templateUrl: './navigation-component.html',
  styleUrl: './navigation-component.css',
})
export class NavigationComponent implements AfterViewInit  {

  pageSections = [
    { id: 'hero' },
    { id: 'experience' },
    { id: 'education' },
    { id: 'techStack' },
    { id: 'certs' },
    { id: 'projects' }
  ];

  activeSection: number = 0;

  private observer!: IntersectionObserver;

  ngAfterViewInit(): void {

    const options = {
      root: null,
      threshold: 0,
      rootMargin: '-45% 0px -45% 0px'
    };

    this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = this.pageSections.findIndex(
            section => section.id === entry.target.id
          );

          if (index !== -1) {
            this.activeSection = index;
          }
        }
      });
    }, options);

    this.pageSections.forEach(section => {

      const element = document.getElementById(section.id);

      if (element) {
        this.observer.observe(element);
      }

    });
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

}
