import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard.page').then((m) => m.DashBoardModule)
  },
  { path: 'heroes', loadChildren: () => import('./pages/heros.page').then((m) => m.HeroesModule) },
  { path: 'heroes/:id', loadChildren: () => import('./pages/hero.page').then((m) => m.HeroModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
