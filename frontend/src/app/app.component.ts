import {Component} from '@angular/core';
import {HeaderService} from './services/header.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  constructor(private headerService: HeaderService) {
  }

  ngOnInit(): void {
  }

  get title(): string {
    return this.headerService.headerData.title;
  }

  get routeUrl(): string {
    return this.headerService.headerData.routeUrl;
  }

}
