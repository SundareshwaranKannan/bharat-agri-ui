import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CropsComponent} from './crops.component';
import {CropCardComponent} from './crop-card/crop-card.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [CropsComponent, CropCardComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports: [
    CropsComponent
  ]
})
export class CropsModule { }
