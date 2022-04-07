import { CommonModule } from '@angular/common';
import { NgModule, Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-heros',
  template: `
    <h2>My Heros</h2>
    <div class="flex flex-row" *ngFor="let hero of heros | async; let i = index" (click)="showHero(i + 1)">
      <span class="bg-gray-500 hover:bg-gray-700 my-2 px-2 rounded-sm font-bold">{{ hero.id + ': ' + hero.name }}</span>
    </div>
  `
})
export class HeroesComponent {
  heros: Observable<any[]>;

  constructor(private store: Store<any>, private router: Router) {
    this.heros = this.store.select('heros');
  }

  showHero(id: number) {
    this.router.navigate(['/heroes', id]);
  }
}

@NgModule({
  imports: [CommonModule, RouterModule.forChild([{ path: '', component: HeroesComponent }])],
  declarations: [HeroesComponent],
  exports: [HeroesComponent]
})
export class HeroesModule {}
