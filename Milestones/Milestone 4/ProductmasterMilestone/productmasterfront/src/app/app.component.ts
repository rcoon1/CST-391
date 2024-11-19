import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'productmasterfront';
  version = "1.0";

  constructor(private router: Router) {

  }

  public displayVersion() {
    alert(" Version: " + this.version);
  }

  public displayProductList() {
    this.router.navigate(['list-product'], { queryParams: { data: new Date() } });
    alert("Display list here");
  }
}

