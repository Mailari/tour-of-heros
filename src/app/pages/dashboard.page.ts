import { CommonModule } from '@angular/common';
import { NgModule, Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  template: `
    <div class="text-center">
      <h1 class="mb-10">Top Heros</h1>
      <div class="grid gap-[2rem] md:grid-cols-4 ">
        <h3
          (click)="showHero(hero.id)"
          class="p-10 bg-gray-900 hover:bg-zinc-500 rounded-md "
          *ngFor="let hero of heros | async | slice: 0:4"
        >
          <span class="">{{ hero.name }}</span>
        </h3>
      </div>
    </div>
  `
})
export class DashBoardComponent {
  heros: Observable<any[]>;
  constructor(private store: Store<any>, private router: Router) {
    this.heros = this.store.select('heros');
  }

  showHero(id: number) {
    this.router.navigate(['/heroes', id]);
  }
}

@NgModule({
  imports: [CommonModule, RouterModule.forChild([{ path: '', component: DashBoardComponent }])],
  declarations: [DashBoardComponent],
  exports: [DashBoardComponent]
})
export class DashBoardModule {}
