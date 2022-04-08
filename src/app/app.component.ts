import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="mx-20">
      <h1>{{ title }}</h1>
      <hr class="my-5" />
      <nav class="flex flex-row  ">
        <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
        <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
      </nav>
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [
    `
      a {
        @apply text-2xl cursor-pointer my-2 mx-4 bg-gray-200 hover:bg-green-400 hover:text-white text-gray-800 font-bold py-1 px-2 rounded hover:rounded-md transition-all duration-300;
      }
    `
  ]
})
export class AppComponent {
  title = 'Tour of Heros';
}
