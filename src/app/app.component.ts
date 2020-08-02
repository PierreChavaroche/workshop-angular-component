import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'workshop-angular-component';
  @ViewChild(HomeComponent) private homeComponent: HomeComponent;

  ngOnInit() {
    console.log(this.homeComponent);
  }

  ngAfterViewInit() {
    // child views loaded
    console.log(this.homeComponent);
  }
}
