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
        const hiddenRoutes = ['/', '/register'];

        // Vérifier si la route actuelle est dans les pages cachées
        this.showHeader = !hiddenRoutes.includes(event.url);
        this.showFooter = !hiddenRoutes.includes(event.url);
        if(event.url === '/activity'){

          this.showFooter = false;
        }
      });
  }
}
