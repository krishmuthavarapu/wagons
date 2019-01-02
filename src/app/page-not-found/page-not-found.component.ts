import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
    <h2 align="center">
      Page Not Found
    </h2>
  `,
  styles: [`h2{
    padding:100px;
  }`]
})
export class PageNotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
