import { ActivatedRoute, Data } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-error-page',
  templateUrl: './app-error-page.component.html',
  styleUrls: ['./app-error-page.component.css']
})
export class AppErrorPageComponent implements OnInit {
  errorMessage: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data
      .subscribe(
        (data: Data) => {
          this.errorMessage = data['message'];
        }
      );
  }

}
