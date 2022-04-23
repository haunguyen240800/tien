import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, delay } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'admin';
  currentRoute: string = '';
  loading = false;
  constructor(public router: Router, private activatedRoute: ActivatedRoute) {
    this.loading = true;
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.currentRoute = event.url;
        setTimeout(() => {
          this.loading = false;
        }, 500);
      });
  }
}
