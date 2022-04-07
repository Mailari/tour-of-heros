import { NgModule, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  template: `<h1>DashBoard</h1>`
})
export class DashBoardComponent {}
@NgModule({
  imports: [RouterModule.forChild([{ path: '', component: DashBoardComponent }])],
  declarations: [DashBoardComponent],
  exports: [DashBoardComponent]
})
export class DashBoardModule {}
