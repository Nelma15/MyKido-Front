import { Component } from '@angular/core';
import { Router, NavigationEnd, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs/operators';
import {FooterComponent} from './components/footer/footer.component';
import { HeaderComponent } from "./components/header/header.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterComponent, HeaderComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',

})
export class AppComponent {
  title = 'Front';
  showHeader: boolean = true;
  showFooter: boolean = true;

  constructor(private router: Router) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        // Liste des pages où on veut cacher le header/footer
        if(event.url === '/') {
          // Vérifier si la route actuelle est dans les pages cachées
          this.showHeader = false
          this.showFooter = false
        }
        if(event.url === '/register' || event.url === '/activity') {
          this.showHeader = true;
          // Vérifier si la route actuelle est dans les pages cachées
          this.showFooter = false
        }
        if(event.url === '/activityList') {
          this.showHeader = true;
          // Vérifier si la route actuelle est dans les pages cachées
          this.showFooter = true
        }
      });
  }
}
