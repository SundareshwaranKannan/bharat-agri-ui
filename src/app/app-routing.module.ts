import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserComponent} from './feature/user/user.component';
import {CropsComponent} from './feature/crops/crops.component';


const routes: Routes = [
  {
    path: '',
    component: UserComponent
  },
  {
    path: 'crop-details',
    component: CropsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
