import { NgModule, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
@Component({ selector: 'app-heros', template: `<h1>Heros</h1>` })
export class HeroesComponent {}

@NgModule({
  imports: [RouterModule.forChild([{ path: '', component: HeroesComponent }])],
  declarations: [HeroesComponent],
  exports: [HeroesComponent]
})
export class HeroesModule {}
