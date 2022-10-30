import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template: `<div>
    <h1>{{ pageTitle }}</h1>
    <pm-productsList></pm-productsList>
  </div>`,
})
export class AppComponent {
  pageTitle: string = 'Acme Product Management';
}
