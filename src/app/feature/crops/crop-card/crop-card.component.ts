import {Component, Input, OnInit} from '@angular/core';
import {Crop} from '../../../shared/model/crop';

@Component({
  selector: 'crop-card',
  templateUrl: './crop-card.component.html',
  styleUrls: ['./crop-card.component.scss']
})
export class CropCardComponent implements OnInit {

  @Input()
  crop: Crop;

  constructor() { }

  ngOnInit(): void {
  }

}
