import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { Location } from '@angular/common';
import { updateHero } from 'src/store/heros.store';
@Component({
  selector: 'app-hero',
  template: `
    <div>
      <h3>
        Id: <span class="text-3xl font-bold">{{ user.id }}</span>
      </h3>

      <h3>Name: <input class="text-black font-bold pl-2" [(ngModel)]="username" /></h3>
      <hr class="my-4" />
      <button (click)="goBack()">
        <span class="px-2 py-1 rounded font-bold hover:bg-gray-900 bg-gray-400 ">Back</span>
      </button>

      <button (click)="update()">
        <span class="px-2 mx-2 py-1 rounded font-bold hover:bg-gray-900 bg-gray-400 ">Update</span>
      </button>
    </div>
  `
})
export class HeroComponent {
  user: any;
  username: any;
  constructor(private store: Store<any>, private route: ActivatedRoute, private loc: Location) {
    route.params.subscribe((params) => {
      this.store.select('heros').subscribe((heros) => {
        this.user = heros.find((hero: any) => hero.id === +params['id']);
        this.username = this.user.name;
        console.log(this.user);
      });
    });
  }

  goBack() {
    this.loc.back();
  }

  update() {
    this.store.dispatch(
      updateHero(this.user.id, { id: this.user.id, name: this.username, description: this.user.description })
    );
  }
}

@NgModule({
  declarations: [HeroComponent],
  exports: [HeroComponent],
  imports: [FormsModule, RouterModule.forChild([{ path: '', component: HeroComponent }])]
})
export class HeroModule {}
